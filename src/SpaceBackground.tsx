import { useEffect, useRef } from "react";

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrame = 0;
    let stars: {
      x: number;
      y: number;
      z: number;
      speed: number;
      size: number;
      brightness: number;
    }[] = [];

    let width = 0;
    let height = 0;

    const STAR_COUNT = 280;

    const createStars = () => {
      stars = [];

      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: (Math.random() - 0.5) * width,
          y: (Math.random() - 0.5) * height,
          z: Math.random() * width,
          speed: 0.8 + Math.random() * 2.2,
          size: 0.4 + Math.random() * 1.6,
          brightness: 0.25 + Math.random() * 0.75,
        });
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createStars();
    };

    const draw = () => {
      ctx.fillStyle = "#020304";
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      /*
       * Deep space glow
       */

      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        Math.max(width, height) * 0.65
      );

      gradient.addColorStop(0, "rgba(45, 70, 130, 0.12)");
      gradient.addColorStop(0.45, "rgba(15, 25, 55, 0.06)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      /*
       * Stars
       */

      for (const star of stars) {
        star.z -= star.speed * 4;

        if (star.z <= 1) {
          star.x = (Math.random() - 0.5) * width;
          star.y = (Math.random() - 0.5) * height;
          star.z = width;
        }

        const scale = 300 / star.z;

        const x = centerX + star.x * scale;
        const y = centerY + star.y * scale;

        const previousScale = 300 / (star.z + star.speed * 5);

        const previousX =
          centerX + star.x * previousScale;

        const previousY =
          centerY + star.y * previousScale;

        if (
          x < -50 ||
          x > width + 50 ||
          y < -50 ||
          y > height + 50
        ) {
          continue;
        }

        const alpha = Math.min(
          1,
          (1 - star.z / width) * star.brightness + 0.15
        );

        ctx.beginPath();

        ctx.moveTo(previousX, previousY);
        ctx.lineTo(x, y);

        ctx.strokeStyle = `rgba(210, 225, 255, ${alpha})`;

        ctx.lineWidth = star.size;

        ctx.stroke();
      }

      /*
       * Green navigation particles
       */

      for (let i = 0; i < 12; i++) {
        const angle =
          (Date.now() * 0.00015 + i * 0.52) %
          (Math.PI * 2);

        const radius =
          Math.min(width, height) *
          (0.25 + (i % 4) * 0.06);

        const x =
          centerX + Math.cos(angle) * radius;

        const y =
          centerY + Math.sin(angle) * radius * 0.35;

        ctx.beginPath();

        ctx.arc(x, y, 1.2, 0, Math.PI * 2);

        ctx.fillStyle = "rgba(183,255,90,0.65)";

        ctx.fill();
      }

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="space-canvas"
      aria-hidden="true"
    />
  );
}