import { useRef, useEffect, useState } from 'react';
import { Renderer, Program, Color, Mesh, Triangle } from 'ogl';

interface PrismProps {
  animationType?: 'rotate' | 'hover';
  scale?: number;
  glow?: number;
  timeScale?: number;
  transparent?: boolean;
  className?: string;
}

const vertex = /* glsl */ `
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0, 1);
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  
  varying vec2 vUv;
  
  uniform float uTime;
  uniform float uScale;
  uniform float uGlow;
  uniform vec2 uMouse;
  uniform float uMouseInfluence;
  
  #define PI 3.14159265359
  
  mat2 rot(float a) {
    float s = sin(a);
    float c = cos(a);
    return mat2(c, -s, s, c);
  }
  
  vec3 hsl2rgb(vec3 c) {
    vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
    return c.z + c.y * (rgb - 0.5) * (1.0 - abs(2.0 * c.z - 1.0));
  }
  
  float sdTriPrism(vec3 p, vec2 h) {
    vec3 q = abs(p);
    return max(q.z - h.y, max(q.x * 0.866025 + p.y * 0.5, -p.y) - h.x * 0.5);
  }
  
  float map(vec3 p) {
    vec3 pos = p;
    
    float mouseRotX = uMouse.y * 0.5 * uMouseInfluence;
    float mouseRotY = uMouse.x * 0.5 * uMouseInfluence;
    
    pos.xz *= rot(uTime * 0.3 + mouseRotY);
    pos.xy *= rot(uTime * 0.2 + mouseRotX);
    pos.yz *= rot(uTime * 0.1);
    
    return sdTriPrism(pos, vec2(uScale, uScale * 0.8));
  }
  
  vec3 calcNormal(vec3 p) {
    vec2 e = vec2(0.001, 0);
    return normalize(vec3(
      map(p + e.xyy) - map(p - e.xyy),
      map(p + e.yxy) - map(p - e.yxy),
      map(p + e.yyx) - map(p - e.yyx)
    ));
  }
  
  void main() {
    vec2 uv = (vUv - 0.5) * 2.0;
    uv.x *= 1.0;
    
    vec3 ro = vec3(0, 0, 6);
    vec3 rd = normalize(vec3(uv, -2.0));
    
    float t = 0.0;
    float tMax = 20.0;
    
    for(int i = 0; i < 100; i++) {
      vec3 p = ro + rd * t;
      float d = map(p);
      if(d < 0.001 || t > tMax) break;
      t += d * 0.5;
    }
    
    vec3 col = vec3(0.0);
    
    if(t < tMax) {
      vec3 p = ro + rd * t;
      vec3 n = calcNormal(p);
      
      vec3 lightDir = normalize(vec3(1, 1, 1));
      float diff = max(dot(n, lightDir), 0.0);
      
      vec3 viewDir = normalize(-rd);
      vec3 reflectDir = reflect(-lightDir, n);
      float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0);
      
      float hue = fract(uTime * 0.05 + p.y * 0.1 + p.x * 0.1);
      vec3 baseColor = hsl2rgb(vec3(hue, 0.7, 0.5));
      
      float fresnel = pow(1.0 - max(dot(viewDir, n), 0.0), 3.0);
      vec3 fresnelColor = hsl2rgb(vec3(fract(hue + 0.3), 0.8, 0.6));
      
      col = baseColor * (0.3 + diff * 0.7);
      col += spec * 0.8;
      col += fresnel * fresnelColor * uGlow;
      
      float edge = 1.0 - smoothstep(0.0, 0.1, abs(map(p)));
      col += edge * fresnelColor * 0.5;
    }
    
    col = pow(col, vec3(0.8));
    
    gl_FragColor = vec4(col, t < tMax ? 1.0 : 0.0);
  }
`;

export default function Prism({
  animationType = 'rotate',
  scale = 3.6,
  glow = 1,
  timeScale = 0.5,
  transparent = true,
  className = '',
}: PrismProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const programRef = useRef<Program | null>(null);
  const animationRef = useRef<number>(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const mouseInfluenceRef = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const renderer = new Renderer({
      alpha: transparent,
      antialias: true,
    });
    rendererRef.current = renderer;
    const gl = renderer.gl;
    container.appendChild(gl.canvas);

    gl.clearColor(0, 0, 0, 0);

    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uScale: { value: scale },
        uGlow: { value: glow },
        uMouse: { value: [0, 0] },
        uMouseInfluence: { value: 0 },
      },
    });
    programRef.current = program;

    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', resize);
    resize();

    let startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = (time - startTime) * 0.001 * timeScale;
      program.uniforms.uTime.value = elapsed;
      program.uniforms.uMouse.value = [mouse.x, mouse.y];
      
      if (animationType === 'hover') {
        mouseInfluenceRef.current += (1 - mouseInfluenceRef.current) * 0.05;
      } else {
        mouseInfluenceRef.current += (0 - mouseInfluenceRef.current) * 0.05;
      }
      program.uniforms.uMouseInfluence.value = mouseInfluenceRef.current;

      renderer.render({ scene: mesh });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      if (container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [scale, glow, timeScale, animationType, transparent]);

  useEffect(() => {
    if (animationType !== 'hover') return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [animationType]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full ${className}`}
      style={{ minHeight: '400px' }}
    />
  );
}
