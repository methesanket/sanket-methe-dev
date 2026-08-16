import { useEffect, useRef } from "react";

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let frame = 0;

    let mouseX = 0;
    let mouseY = 0;

    const stars: {
      x: number;
      y: number;
      z: number;
      speed: number;
      size: number;
    }[] = [];

    const STAR_COUNT = 240;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      stars.length = 0;

      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: (Math.random() - 0.5) * width,
          y: (Math.random() - 0.5) * height,
          z: Math.random() * width,
          speed: 1 + Math.random() * 2.5,
          size: 0.4 + Math.random() * 1.5,
        });
      }
    };

    const move = (event: MouseEvent) => {
      mouseX = (event.clientX / width - 0.5) * 2;
      mouseY = (event.clientY / height - 0.5) * 2;
    };

    const draw = () => {
      ctx.fillStyle = "#020304";
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2 + mouseX * 12;
      const centerY = height / 2 + mouseY * 8;

      /*
       * Deep-space glow
       */

      const glow = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        Math.max(width, height) * 0.65
      );

      glow.addColorStop(0, "rgba(45,70,130,0.14)");
      glow.addColorStop(0.5, "rgba(10,20,45,0.06)");
      glow.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      /*
       * Stars
       */

      for (const star of stars) {
        star.z -= star.speed * 4;

        if (star.z < 1) {
          star.z = width;
          star.x = (Math.random() - 0.5) * width;
          star.y = (Math.random() - 0.5) * height;
        }

        const scale = 300 / star.z;

        const x =
          centerX +
          star.x * scale +
          mouseX * 20 * scale;

        const y =
          centerY +
          star.y * scale +
          mouseY * 12 * scale;

        const previousScale =
          300 / (star.z + star.speed * 5);

        const previousX =
          centerX +
          star.x * previousScale +
          mouseX * 20 * previousScale;

        const previousY =
          centerY +
          star.y * previousScale +
          mouseY * 12 * previousScale;

        if (
          x < -50 ||
          x > width + 50 ||
          y < -50 ||
          y > height + 50
        ) {
          continue;
        }

        const brightness = Math.min(
          1,
          1 - star.z / width + 0.15
        );

        ctx.beginPath();

        ctx.moveTo(previousX, previousY);
        ctx.lineTo(x, y);

        ctx.strokeStyle = `rgba(210,225,255,${brightness})`;

        ctx.lineWidth = star.size;

        ctx.stroke();
      }

      /*
       * Navigation particles
       */

      const time = performance.now() * 0.0005;

      for (let i = 0; i < 18; i++) {
        const angle = time + i * 0.35;

        const radius =
          Math.min(width, height) *
          (0.25 + (i % 5) * 0.035);

        const x =
          centerX +
          Math.cos(angle) * radius;

        const y =
          centerY +
          Math.sin(angle) *
            radius *
            0.32;

        ctx.beginPath();

        ctx.arc(x, y, 1.2, 0, Math.PI * 2);

        ctx.fillStyle =
          "rgba(183,255,90,0.7)";

        ctx.fill();
      }

      frame = requestAnimationFrame(draw);
    };

    resize();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move);

    draw();

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "mousemove",
        move
      );
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