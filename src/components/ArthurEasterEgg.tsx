import { useEffect, useRef } from 'react';

const ARTHUR_PHOTOS = [
  '/arthur-1.png',
  '/arthur-2.png',
  '/arthur-3.png',
  '/arthur-4.png',
  '/arthur-5.png',
  '/arthur-6.png',
];

interface ArthurEasterEggProps {
  initialImgSrc: string;
  onStop: () => void;
}

export function ArthurEasterEgg({ initialImgSrc, onStop }: ArthurEasterEggProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    type ArthurParticle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      img: HTMLImageElement;
      size: number;
    };

    const arthurs: ArthurParticle[] = [];

    let animationFrameId: number;
    let lastAddTime = performance.now();

    const drawArthur = (x: number, y: number, size: number, currentImg: HTMLImageElement) => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(currentImg, x, y, size, size);
      ctx.restore();
    };

    const loadedImages: HTMLImageElement[] = [];
    let imagesLoaded = 0;

    const startAnimation = () => {
      // Find the initial image if possible, otherwise use the first one
      const firstImg = loadedImages.find(img => img.src.includes(initialImgSrc.replace(/^\//, ''))) || loadedImages[0];
      arthurs.push(createArthur(firstImg, true));
      animationFrameId = requestAnimationFrame(animate);
    };

    const createArthur = (img: HTMLImageElement, isFirst = false): ArthurParticle => {
      const size = window.innerWidth > 768 ? 120 : 80;
      const speed = isFirst ? 5 : 4 + Math.random() * 3;
      const angle = isFirst ? -Math.PI / 4 : Math.random() * Math.PI * 2;
      return {
        x: isFirst ? window.innerWidth / 2 - size / 2 : Math.random() * (canvas.width - size),
        y: isFirst ? window.innerHeight / 2 - size / 2 : Math.random() * (canvas.height - size),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        img: img,
        size: size
      };
    };

    ARTHUR_PHOTOS.forEach(src => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = src;
      img.onerror = () => {
        img.src = "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=200&auto=format&fit=crop";
      };
      img.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === ARTHUR_PHOTOS.length) {
          startAnimation();
        }
      };
      loadedImages.push(img);
    });

    const animate = (time: number) => {
      if (time - lastAddTime > 4000) {
        const randomImg = loadedImages[Math.floor(Math.random() * loadedImages.length)];
        arthurs.push(createArthur(randomImg));
        lastAddTime = time;
      }

      for (const arthur of arthurs) {
        arthur.x += arthur.vx;
        arthur.y += arthur.vy;

        if (arthur.x < 0) {
          arthur.x = 0;
          arthur.vx *= -1;
        } else if (arthur.x + arthur.size > canvas.width) {
          arthur.x = canvas.width - arthur.size;
          arthur.vx *= -1;
        }

        if (arthur.y < 0) {
          arthur.y = 0;
          arthur.vy *= -1;
        } else if (arthur.y + arthur.size > canvas.height) {
          arthur.y = canvas.height - arthur.size;
          arthur.vy *= -1;
        }

        drawArthur(arthur.x, arthur.y, arthur.size, arthur.img);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const tempCtx = tempCanvas.getContext('2d');
      if (tempCtx) tempCtx.drawImage(canvas, 0, 0);

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.drawImage(tempCanvas, 0, 0);
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [initialImgSrc]);

  return (
    <div 
      onClick={onStop}
      className="fixed inset-0 z-[9999] cursor-pointer"
      style={{ backgroundColor: 'transparent' }}
    >
      <canvas ref={canvasRef} className="block w-full h-full pointer-events-none" />
    </div>
  );
}
