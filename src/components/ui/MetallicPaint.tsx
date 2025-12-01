import { useRef, useEffect, useCallback } from 'react';

interface MetallicPaintParams {
  edge?: number;
  patternBlur?: number;
  patternScale?: number;
  refraction?: number;
  speed?: number;
  liquid?: number;
}

interface MetallicPaintProps {
  imageData: ImageData;
  params?: MetallicPaintParams;
}

const defaultParams: MetallicPaintParams = {
  edge: 2,
  patternBlur: 0.005,
  patternScale: 2,
  refraction: 0.015,
  speed: 0.3,
  liquid: 0.07,
};

const vertexShader = `
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  
  uniform sampler2D uTexture;
  uniform vec2 uResolution;
  uniform float uTime;
  uniform float uEdge;
  uniform float uPatternBlur;
  uniform float uPatternScale;
  uniform float uRefraction;
  uniform float uSpeed;
  uniform float uLiquid;
  
  varying vec2 vUv;
  
  // Simplex noise functions
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
  
  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                        -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                            + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
                            dot(x12.zw,x12.zw)), 0.0);
    m = m*m;
    m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }
  
  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for(int i = 0; i < 5; i++) {
      value += amplitude * snoise(p);
      p *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }
  
  void main() {
    vec2 uv = vUv;
    vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
    
    // Animated noise for liquid effect
    float time = uTime * uSpeed;
    vec2 noiseCoord = uv * uPatternScale * aspect;
    float noise1 = fbm(noiseCoord + time * 0.5);
    float noise2 = fbm(noiseCoord * 1.5 - time * 0.3);
    
    // Combine noises for displacement
    vec2 displacement = vec2(noise1, noise2) * uLiquid;
    
    // Apply refraction
    vec2 refractedUv = uv + displacement * uRefraction;
    
    // Sample the mask texture
    float mask = texture2D(uTexture, refractedUv).r;
    
    // Edge detection for metallic highlights
    float dx = texture2D(uTexture, refractedUv + vec2(uPatternBlur, 0.0)).r - 
               texture2D(uTexture, refractedUv - vec2(uPatternBlur, 0.0)).r;
    float dy = texture2D(uTexture, refractedUv + vec2(0.0, uPatternBlur)).r - 
               texture2D(uTexture, refractedUv - vec2(0.0, uPatternBlur)).r;
    
    vec2 gradient = vec2(dx, dy) * uEdge;
    
    // Create metallic color based on gradient
    float highlight = dot(normalize(gradient + 0.001), vec2(0.707, 0.707));
    highlight = pow(abs(highlight), 2.0);
    
    // Metallic color palette
    vec3 darkMetal = vec3(0.15, 0.15, 0.18);
    vec3 midMetal = vec3(0.4, 0.42, 0.45);
    vec3 lightMetal = vec3(0.85, 0.87, 0.9);
    vec3 chromeMetal = vec3(0.95, 0.97, 1.0);
    
    // Mix colors based on lighting angle
    float angle = atan(gradient.y, gradient.x) + time * 0.2;
    float variation = sin(angle * 3.0) * 0.5 + 0.5;
    
    vec3 baseColor = mix(darkMetal, midMetal, variation);
    vec3 highlightColor = mix(midMetal, lightMetal, highlight);
    vec3 metalColor = mix(baseColor, highlightColor, highlight);
    
    // Add chrome reflection
    float chromeIntensity = pow(highlight, 4.0);
    metalColor = mix(metalColor, chromeMetal, chromeIntensity * 0.5);
    
    // Add subtle color tint based on position
    vec3 tint = vec3(0.5 + sin(uv.x * 3.14159) * 0.1, 
                     0.5 + cos(uv.y * 3.14159) * 0.1, 
                     0.55);
    metalColor *= tint * 2.0;
    
    // Apply mask
    float alpha = smoothstep(0.1, 0.9, mask);
    
    gl_FragColor = vec4(metalColor, alpha);
  }
`;

export async function parseLogoImage(file: File): Promise<{ imageData: ImageData } | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Could not get canvas context'));
          return;
        }
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        resolve({ imageData });
      };
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = e.target?.result as string;
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

const MetallicPaint = ({ imageData, params = {} }: MetallicPaintProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number>(Date.now());

  const mergedParams = { ...defaultParams, ...params };

  const createShader = useCallback((gl: WebGLRenderingContext, type: number, source: string) => {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Shader compile error:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }, []);

  const createProgram = useCallback((gl: WebGLRenderingContext, vs: WebGLShader, fs: WebGLShader) => {
    const program = gl.createProgram();
    if (!program) return null;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return null;
    }
    return program;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !imageData || imageData.width === 1) return;

    const gl = canvas.getContext('webgl', { 
      alpha: true, 
      premultipliedAlpha: false,
      antialias: true 
    });
    if (!gl) return;

    glRef.current = gl;

    // Create shaders and program
    const vs = createShader(gl, gl.VERTEX_SHADER, vertexShader);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
    if (!vs || !fs) return;

    const program = createProgram(gl, vs, fs);
    if (!program) return;

    programRef.current = program;
    gl.useProgram(program);

    // Set up geometry
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1, 1, -1, -1, 1,
      -1, 1, 1, -1, 1, 1
    ]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Create texture from imageData
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imageData);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    // Set uniforms
    gl.uniform1i(gl.getUniformLocation(program, 'uTexture'), 0);

    // Enable blending for transparency
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const render = () => {
      if (!gl || !program) return;

      const width = canvas.clientWidth * window.devicePixelRatio;
      const height = canvas.clientHeight * window.devicePixelRatio;
      
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      const time = (Date.now() - startTimeRef.current) / 1000;

      gl.uniform2f(gl.getUniformLocation(program, 'uResolution'), width, height);
      gl.uniform1f(gl.getUniformLocation(program, 'uTime'), time);
      gl.uniform1f(gl.getUniformLocation(program, 'uEdge'), mergedParams.edge!);
      gl.uniform1f(gl.getUniformLocation(program, 'uPatternBlur'), mergedParams.patternBlur!);
      gl.uniform1f(gl.getUniformLocation(program, 'uPatternScale'), mergedParams.patternScale!);
      gl.uniform1f(gl.getUniformLocation(program, 'uRefraction'), mergedParams.refraction!);
      gl.uniform1f(gl.getUniformLocation(program, 'uSpeed'), mergedParams.speed!);
      gl.uniform1f(gl.getUniformLocation(program, 'uLiquid'), mergedParams.liquid!);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [imageData, createShader, createProgram, mergedParams]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        width: '100%', 
        height: '100%',
        display: 'block'
      }} 
    />
  );
};

export default MetallicPaint;
