import { useRef, useEffect, useState, useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { namesListState, winnerMessageState, darkModeState } from '../shared/globalState';
import Modal from './Modals/Modal';
import ReactCanvasConfetti from 'react-canvas-confetti';

const CANVAS_SIZE = 600;
const DPR = window.devicePixelRatio || 1;

const SEG_COLORS = [
  '#6366f1', '#8b5cf6', '#a855f7', '#ec4899',
  '#f43f5e', '#f97316', '#f59e0b', '#10b981',
  '#06b6d4', '#3b82f6', '#84cc16', '#6366f1',
];

const confettiStyles = {
  position: 'fixed', pointerEvents: 'none',
  width: '100%', height: '100%', zIndex: 9999, top: 0, left: 0,
};

function truncate(str, max) {
  return str.length > max ? str.slice(0, max - 1) + '…' : str;
}

export default function SpinWheel({ removeName }) {
  const canvasRef = useRef(null);
  const rotationRef = useRef(0);
  const animRef = useRef(null);
  const confettiRef = useRef(null);

  const [spinning, setSpinning] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [drawnName, setDrawnName] = useState('');

  const [namesList, setNamesList] = useRecoilState(namesListState);
  const winnerMessage = useRecoilValue(winnerMessageState);
  const isDarkMode = useRecoilValue(darkModeState);

  const names = (() => {
    const raw = typeof namesList === 'string' ? namesList : '';
    return raw.split('\n').map(s => s.replace(/\s+$/, '')).filter(Boolean);
  })();

  const isEmpty = names.length === 0;

  const winnerPrompt =
    winnerMessage && winnerMessage.length > 0
      ? winnerMessage
      : '🎉 And the winner is...';

  const drawWheel = useCallback((rot, dark = isDarkMode) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const sz = CANVAS_SIZE * DPR;
    const cx = sz / 2;
    const cy = sz / 2;
    const radius = sz / 2 - 4 * DPR;
    const n = names.length;

    ctx.clearRect(0, 0, sz, sz);

    if (n === 0) {
      // Empty state — matches the list view card theme
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
      ctx.fillStyle = dark ? '#1f2937' : '#ffffff'; // card: bg-white dark:bg-gray-800
      ctx.fill();
      ctx.strokeStyle = dark ? 'rgba(55,65,81,0.5)' : '#f3f4f6'; // dark:border-gray-700/50 / border-gray-100
      ctx.lineWidth = 2 * DPR;
      ctx.stroke();

      // Icon circle: bg-indigo-50 dark:bg-indigo-900/20  (circular)
      const iconCY = cy - 32 * DPR;
      ctx.beginPath();
      ctx.arc(cx, iconCY, 32 * DPR, 0, 2 * Math.PI);
      ctx.fillStyle = dark ? 'rgba(49,27,146,0.2)' : '#eef2ff';
      ctx.fill();

      // Group/people icon (same SVG path as list empty state), drawn via Path2D
      const iconScale = 1.5 * DPR;
      ctx.save();
      ctx.translate(cx - 12 * iconScale, iconCY - 12 * iconScale);
      ctx.scale(iconScale, iconScale);
      ctx.strokeStyle = '#818cf8';
      ctx.lineWidth = 1.5;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke(new Path2D('M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'));
      ctx.restore();

      // "No participants yet": text-gray-500 dark:text-gray-400
      ctx.fillStyle = dark ? '#9ca3af' : '#6b7280';
      ctx.font = `600 ${16 * DPR}px system-ui,-apple-system,sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('No participants yet', cx, cy + 24 * DPR);

      // Hint: text-gray-400 dark:text-gray-500
      ctx.fillStyle = dark ? '#6b7280' : '#9ca3af';
      ctx.font = `${14 * DPR}px system-ui,-apple-system,sans-serif`;
      ctx.fillText('Open settings to add names', cx, cy + 46 * DPR);
      return;
    }

    const seg = (2 * Math.PI) / n;
    const maxChars = n <= 6 ? 16 : n <= 12 ? 11 : n <= 20 ? 8 : 6;
    const fontSize = (n <= 8 ? 13 : n <= 16 ? 11 : 9) * DPR;

    for (let i = 0; i < n; i++) {
      const sa = -Math.PI / 2 + rot + i * seg;
      const ea = sa + seg;

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, sa, ea);
      ctx.closePath();
      ctx.fillStyle = SEG_COLORS[i % SEG_COLORS.length];
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.55)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Label
      const midA = sa + seg / 2;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(midA);
      ctx.fillStyle = 'rgba(255,255,255,0.95)';
      ctx.font = `600 ${fontSize}px system-ui,-apple-system,sans-serif`;
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0,0,0,0.3)';
      ctx.shadowBlur = 3;
      ctx.fillText(truncate(names[i], maxChars), radius * 0.88, 0);
      ctx.restore();
    }

    // Outer ring
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(255,255,255,0.4)';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Center hub
    ctx.beginPath();
    ctx.arc(cx, cy, 14 * DPR, 0, 2 * Math.PI);
    const hub = ctx.createRadialGradient(cx - 3, cy - 3, 2, cx, cy, 14);
    hub.addColorStop(0, '#c4b5fd');
    hub.addColorStop(1, '#4f46e5');
    ctx.fillStyle = hub;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.9)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }, [names, isDarkMode]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    drawWheel(rotationRef.current);
  }, [drawWheel]);

  useEffect(() => () => { if (animRef.current) cancelAnimationFrame(animRef.current); }, []);

  // Confetti
  const getInstance = useCallback(({ confetti }) => { confettiRef.current = confetti; }, []);
  const makeShot = useCallback((ratio, opts) => {
    confettiRef.current?.({
      ...opts, origin: { y: 0.7 },
      particleCount: Math.floor(200 * ratio),
      colors: ['#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#f0abfc'],
    });
  }, []);
  const fire = useCallback(() => {
    makeShot(0.25, { spread: 26, startVelocity: 55 });
    makeShot(0.2,  { spread: 60 });
    makeShot(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    makeShot(0.1,  { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    makeShot(0.1,  { spread: 120, startVelocity: 45 });
  }, [makeShot]);

  const spin = useCallback(() => {
    if (spinning || names.length === 0) return;

    const n = names.length;
    const winnerIdx = Math.floor(Math.random() * n);
    const seg = (2 * Math.PI) / n;
    const r0 = rotationRef.current;
    const minSpins = 5 + Math.random() * 3;

    // Target: r_final ≡ -(winnerIdx + 0.5) * seg (mod 2π)
    // so that the winner segment center aligns with the top pointer (−π/2 offset)
    const idealBase = -(winnerIdx + 0.5) * seg;
    const k = Math.ceil((r0 + minSpins * 2 * Math.PI - idealBase) / (2 * Math.PI));
    const r_final = idealBase + k * 2 * Math.PI;

    setSpinning(true);
    const duration = 4000 + Math.random() * 1500;
    const start = performance.now();

    const animate = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4); // ease-out quart
      const rot = r0 + (r_final - r0) * eased;
      rotationRef.current = rot;
      drawWheel(rot);

      if (t < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        rotationRef.current = r_final;
        drawWheel(r_final);
        if (removeName) {
          setNamesList(names.filter((_, i) => i !== winnerIdx).join('\n'));
        }
        setDrawnName(names[winnerIdx]);
        setSpinning(false);
        setIsOpen(true);
        fire();
      }
    };

    animRef.current = requestAnimationFrame(animate);
  }, [spinning, names, drawWheel, fire, removeName, setNamesList]);

  return (
    <>
      {/* Wheel canvas with pointer */}
      <div className='relative flex items-center justify-center w-full'>
        {/* Downward-pointing pointer above the wheel */}
        <div
          className='absolute z-10'
          style={{
            top: 0,
            left: '50%',
            transform: 'translate(-50%, -6px)',
            width: 0, height: 0,
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderTop: '20px solid #6366f1',
            filter: 'drop-shadow(0 2px 6px rgba(99,102,241,0.5))',
          }}
        />
        <canvas
          ref={canvasRef}
          width={CANVAS_SIZE * DPR}
          height={CANVAS_SIZE * DPR}
          className='rounded-full shadow-xl shadow-indigo-500/20'
          style={{ width: '100%', maxWidth: CANVAS_SIZE, aspectRatio: '1' }}
        />
      </div>

      {/* Spin button */}
      <button
        onClick={spin}
        disabled={isEmpty || spinning}
        className={`w-full flex items-center justify-center gap-2 px-6 py-4 sm:py-3 text-base sm:text-sm font-semibold text-white rounded-xl shadow-md transition-colors duration-200 ${
          isEmpty || spinning
            ? 'bg-indigo-300 dark:bg-indigo-900/40 cursor-not-allowed opacity-60'
            : 'bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 active:from-indigo-700 active:to-violet-800'
        }`}
      >
        {spinning ? (
          <>
            <svg className='w-4 h-4 animate-spin' fill='none' viewBox='0 0 24 24'>
              <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
              <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z' />
            </svg>
            Spinning…
          </>
        ) : (
          <>
            <svg className='w-4 h-4 flex-shrink-0' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
            </svg>
            Spin the Wheel
          </>
        )}
      </button>

      <Modal
        isOpen={isOpen}
        title={winnerPrompt}
        body={drawnName}
        onClose={(v) => setIsOpen(v)}
      />
      <ReactCanvasConfetti onInit={getInstance} style={confettiStyles} />
    </>
  );
}
