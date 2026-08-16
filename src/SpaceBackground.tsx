import { useEffect, useRef } from "react";

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;

    const stars = Array.from({ length: 140 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.4 + 0.3,
      speed: Math.random() * 0.00035 + 0.00008,
      opacity: Math.random() * 0.7 + 0.2,
    }));

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        star.y += star.speed;

        if (star.y > 1) {
          star.y = 0;
          star.x = Math.random();
        }

        const pulse =
          0.65 + Math.sin(Date.now() * 0.001 + star.x * 10) * 0.35;

        ctx.beginPath();
        ctx.arc(
          star.x * width,
          star.y * height,
          star.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(255,255,255,${
          star.opacity * pulse
        })`;

        ctx.fill();
      }

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);

    draw();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="space-canvas" />;
}