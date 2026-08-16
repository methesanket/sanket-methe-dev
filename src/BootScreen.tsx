import { useEffect, useState } from "react";

export default function BootScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let frame = 0;

    const animate = (time: number) => {
      const elapsed = time - start;

      const nextProgress = Math.min(
        100,
        Math.round((elapsed / 1000) * 100)
      );

      setProgress(nextProgress);

      if (elapsed < 1000) {
        frame = requestAnimationFrame(animate);
      } else {
        setProgress(100);

        setTimeout(() => {
          setVisible(false);
        }, 180);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="boot-screen">
      <div className="boot-grid" />

      <div className="boot-content">
        <div className="boot-top">
          <span>SM // SYSTEM</span>
          <span>MISSION 01</span>
        </div>

        <div className="boot-center">
          <div className="boot-ring">
            <div className="boot-core">SM</div>
          </div>

          <p className="boot-title">
            INITIALIZING PORTFOLIO
          </p>

          <p className="boot-status">
            SYSTEM CHECK <span>●</span>
          </p>
        </div>

        <div className="boot-bottom">
          <div className="boot-progress">
            <div
              className="boot-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="boot-meta">
            <span>CORE SYSTEM</span>
            <strong>{progress}%</strong>
          </div>
        </div>
      </div>
    </div>
  );
}