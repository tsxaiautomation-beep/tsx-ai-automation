import React, { useEffect, useRef } from 'react';

export default function CircuitCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    const mouse = { x: null, y: null, r: 150 };

    const onMove = e => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = () => { mouse.x = null; mouse.y = null; };
    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', onResize);

    const nodes = [];
    const COUNT = Math.min(Math.floor((W * H) / 28000), 50);

    function init() {
      nodes.length = 0;
      for (let i = 0; i < COUNT; i++) {
        nodes.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3,
          r: Math.random() * 1.4 + .6,
          pulse: Math.random() * Math.PI,
        });
      }
    }
    init();

    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
        n.pulse += .016;
        const a = .12 + Math.sin(n.pulse) * .1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139,92,246,${a})`;
        ctx.shadowBlur = 5;
        ctx.shadowColor = '#7C3AED';
        ctx.fill();
        ctx.shadowBlur = 0;

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const d = Math.hypot(n.x - m.x, n.y - m.y);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y); ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = `rgba(139,92,246,${.06 * (1 - d / 120)})`;
            ctx.lineWidth = .5;
            ctx.stroke();
          }
        }

        if (mouse.x != null) {
          const d = Math.hypot(n.x - mouse.x, n.y - mouse.y);
          if (d < mouse.r) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y); ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(167,139,250,${.08 * (1 - d / mouse.r)})`;
            ctx.lineWidth = .6;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} style={{
        position: 'fixed', inset: 0, width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 0, opacity: .4,
      }} />
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `linear-gradient(rgba(167,139,250,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(167,139,250,0.025) 1px, transparent 1px)`,
        backgroundSize: '64px 64px',
        WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, #000 20%, transparent 70%)',
        maskImage: 'radial-gradient(ellipse at 50% 0%, #000 20%, transparent 70%)',
      }} />
    </>
  );
}
