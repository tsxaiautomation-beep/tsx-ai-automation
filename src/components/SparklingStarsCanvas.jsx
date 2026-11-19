import React, { useEffect, useRef } from 'react';

export default function SparklingStarsCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    // Star collection
    const stars = [];
    const shootingStars = [];
    const STAR_COUNT = Math.min(Math.floor((width * height) / 9000), 120);

    const colors = [
      '#FFFFFF',
      '#FEE2E2',
      '#FCA5A5',
      '#EF4444',
      '#DC2626',
      '#FF1E44',
      '#E5E7EB', // metallic silver sparkle
    ];

    function initStars() {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.8 + 0.4,
          baseAlpha: Math.random() * 0.6 + 0.2,
          alpha: 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.35,
          twinkleSpeed: Math.random() * 0.04 + 0.015,
          twinklePhase: Math.random() * Math.PI * 2,
          isSparkle: Math.random() > 0.65, // Special 4-point star sparkle
          sparkleSize: Math.random() * 3 + 2,
        });
      }
    }

    // Occasional shooting star
    function addShootingStar() {
      if (shootingStars.length < 2 && Math.random() < 0.02) {
        shootingStars.push({
          x: Math.random() * width,
          y: Math.random() * (height * 0.5),
          len: Math.random() * 80 + 40,
          speed: Math.random() * 5 + 4,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
          opacity: 1,
        });
      }
    }

    initStars();

    // Draw a 4-point diamond star sparkle
    function drawStarSparkle(x, y, size, alpha, color) {
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = color;
      ctx.globalAlpha = alpha;

      ctx.beginPath();
      // 4-point star
      for (let i = 0; i < 4; i++) {
        ctx.lineTo(Math.cos((i * Math.PI) / 2) * size, Math.sin((i * Math.PI) / 2) * size);
        ctx.lineTo(
          Math.cos(((i + 0.5) * Math.PI) / 2) * (size * 0.25),
          Math.sin(((i + 0.5) * Math.PI) / 2) * (size * 0.25)
        );
      }
      ctx.closePath();
      ctx.shadowBlur = 8;
      ctx.shadowColor = color;
      ctx.fill();
      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Render and update drifting stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Drifting movement
        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap around screen edges
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Sparkling twinkle
        star.twinklePhase += star.twinkleSpeed;
        star.alpha = star.baseAlpha + Math.sin(star.twinklePhase) * 0.35;
        if (star.alpha < 0.1) star.alpha = 0.1;
        if (star.alpha > 0.95) star.alpha = 0.95;

        if (star.isSparkle && star.alpha > 0.55) {
          drawStarSparkle(star.x, star.y, star.sparkleSize, star.alpha, star.color);
        } else {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = star.alpha;
          ctx.shadowBlur = star.radius > 1.2 ? 6 : 2;
          ctx.shadowColor = star.color;
          ctx.fill();
        }
      }

      // Shooting stars
      addShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= 0.012;

        if (s.opacity <= 0 || s.x > width || s.y > height) {
          shootingStars.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.strokeStyle = `rgba(239, 68, 68, ${s.opacity})`;
        ctx.lineWidth = 1.6;
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#EF4444';
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(
          s.x - Math.cos(s.angle) * s.len,
          s.y - Math.sin(s.angle) * s.len
        );
        ctx.stroke();
        ctx.restore();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}

