import { useRef, useCallback } from 'react';

export const confettiStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  zIndex: 9999,
  top: 0,
  left: 0,
};

const COLORS = ['#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#f0abfc'];

export default function useConfetti() {
  const ref = useRef(null);

  const getInstance = useCallback(({ confetti }) => {
    ref.current = confetti;
  }, []);

  const makeShot = useCallback((ratio, opts) => {
    ref.current?.({
      ...opts,
      origin: { y: 0.7 },
      particleCount: Math.floor(200 * ratio),
      colors: COLORS,
    });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, { spread: 26, startVelocity: 55 });
    makeShot(0.2,  { spread: 60 });
    makeShot(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    makeShot(0.1,  { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    makeShot(0.1,  { spread: 120, startVelocity: 45 });
  }, [makeShot]);

  return { getInstance, fire };
}
