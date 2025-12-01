import { useState, useEffect } from 'react';
import MetallicPaint, { parseLogoImage } from './ui/MetallicPaint';
import vLogoSvg from '@/assets/v-logo.svg';

interface MetallicVLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const MetallicVLogo = ({ width = 64, height = 64, className = '' }: MetallicVLogoProps) => {
  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    async function loadLogo() {
      try {
        const response = await fetch(vLogoSvg);
        const blob = await response.blob();
        const file = new File([blob], 'v-logo.svg', { type: 'image/svg+xml' });
        const parsedData = await parseLogoImage(file);
        setImageData(parsedData?.imageData ?? null);
      } catch (err) {
        console.error('Error loading V logo:', err);
      }
    }
    loadLogo();
  }, []);

  if (!imageData) {
    return (
      <div 
        className={className} 
        style={{ width, height, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <span className="font-bold text-2xl text-foreground">V</span>
      </div>
    );
  }

  return (
    <div className={className} style={{ width, height }}>
      <MetallicPaint 
        imageData={imageData} 
        params={{ 
          edge: 3, 
          patternBlur: 0.004, 
          patternScale: 2.5, 
          refraction: 0.012, 
          speed: 0.25, 
          liquid: 0.06 
        }} 
      />
    </div>
  );
};

export default MetallicVLogo;
