import {useState, useCallback, useRef, useEffect} from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import {namesListState, winnerMessageState, spinModeState} from "../shared/globalState";

import ButtonPrimary from './Buttons/ButtonPrimary';
import Modal from './Modals/Modal';
import SpinWheel from './SpinWheel';

import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  zIndex: 9999,
  top: 0,
  left: 0,
};

const Wheel = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [drawnName, setDrawnName] = useState();
  const winnerMessageValue = useRecoilValue(winnerMessageState);
  const [namesList, setNamesList] = useRecoilState(namesListState);
  const [isSpinMode, setIsSpinMode] = useRecoilState(spinModeState);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  const getCleanNames = () => {
    const raw = typeof namesList === 'string' ? namesList : '';
    return raw
      .split("\n")
      .map(item => item.replace(/\s+$/, ""))
      .filter(item => item !== '');
  };

  const cleanedNames = getCleanNames();

  const getNames = () => {
    const names = getCleanNames();
    const drawn = names[Math.floor(Math.random() * names.length)];
    setDrawnName(drawn);
    setIsOpen(true);
    fire();
    if (props.removeName && names.indexOf(drawn) >= 0) {
      setNamesList(names.filter(n => n !== drawn).join("\n"));
    }
  };

  const refAnimationInstance = useRef(null);

  const getInstance = useCallback(({ confetti }) => {
    refAnimationInstance.current = confetti;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
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

  const toggleFullscreen = useCallback(() => setIsFullscreen(f => !f), []);

  useEffect(() => {
    document.body.style.overflow = isFullscreen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isFullscreen]);

  const isEmpty = cleanedNames.length === 0;
  const winnerPrompt = winnerMessageValue && winnerMessageValue.length > 0
    ? winnerMessageValue
    : '🎉 And the winner is...';

  return (
    <>
      <div
        ref={containerRef}
        className={isFullscreen
          ? 'fixed inset-0 z-40 bg-gray-50 dark:bg-[#0c0c14] flex flex-col items-center overflow-y-auto'
          : 'flex flex-col items-center gap-6 w-full py-8 px-4 sm:px-6'
        }
      >
        <div className={isFullscreen ? 'w-full max-w-lg mx-auto flex flex-col gap-6 items-center py-8 px-4' : 'contents'}>

        {/* Page header */}
        <div className='text-center'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {isSpinMode ? 'Spin the Wheel' : 'Pick a Random Name'}
          </h1>
          <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
            {isEmpty
              ? 'Add names in settings to get started'
              : `${cleanedNames.length} participant${cleanedNames.length !== 1 ? 's' : ''} in the draw`}
          </p>
        </div>

        {/* Mode toggle + fullscreen */}
        <div className='flex items-center gap-2 self-center'>
          <div className='flex items-center p-1 bg-gray-100 dark:bg-gray-800/60 rounded-xl'>
            <button
              onClick={() => setIsSpinMode(false)}
              className={`flex items-center gap-1.5 px-4 py-2.5 sm:px-3 sm:py-1.5 rounded-lg text-sm sm:text-xs font-medium transition-all duration-150 ${
                !isSpinMode
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <svg className='w-5 h-5 sm:w-3.5 sm:h-3.5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 10h16M4 14h16M4 18h16' />
              </svg>
              List
            </button>
            <button
              onClick={() => setIsSpinMode(true)}
              className={`flex items-center gap-1.5 px-4 py-2.5 sm:px-3 sm:py-1.5 rounded-lg text-sm sm:text-xs font-medium transition-all duration-150 ${
                isSpinMode
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <svg className='w-5 h-5 sm:w-3.5 sm:h-3.5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 2a10 10 0 100 20A10 10 0 0012 2zm0 0v10m0 0l-3-3m3 3l3-3' />
              </svg>
              Wheel
            </button>
          </div>
          <button
            onClick={toggleFullscreen}
            className='p-2 rounded-xl text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-all duration-150 [-webkit-tap-highlight-color:transparent]'
            title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          >
            {isFullscreen ? (
              /* Exit fullscreen — X in a box */
              <svg className='w-5 h-5 sm:w-4 sm:h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            ) : (
              /* Expand / enter fullscreen — arrows pointing outward */
              <svg className='w-5 h-5 sm:w-4 sm:h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4' />
              </svg>
            )}
          </button>
        </div>

        {isSpinMode ? (
          <SpinWheel removeName={props.removeName} />
        ) : (
          <>
            {/* Names card */}
            <div className='w-full card overflow-hidden animate-slide-up'>
              {isEmpty ? (
                <div className='flex flex-col items-center justify-center py-16 px-6 text-center'>
                  <div className='w-16 h-16 sm:w-14 sm:h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center mb-4'>
                    <svg className='w-9 h-9 sm:w-7 sm:h-7 text-indigo-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                    </svg>
                  </div>
                  <p className='text-base sm:text-sm font-medium text-gray-500 dark:text-gray-400'>No participants yet</p>
                  <p className='mt-1 text-sm sm:text-xs text-gray-400 dark:text-gray-500'>Open settings to add names</p>
                </div>
              ) : (
                <>
                  <div className='px-5 py-3 border-b border-gray-100 dark:border-gray-700/50 flex items-center justify-between'>
                    <span className='section-label'>Participants</span>
                    <span className='text-xs font-bold bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2.5 py-0.5 rounded-full'>
                      {cleanedNames.length}
                    </span>
                  </div>
                  <ul className={`divide-y divide-gray-50 dark:divide-gray-700/30 overflow-y-auto ${isFullscreen ? 'max-h-[60vh]' : 'max-h-96'}`}>
                    {cleanedNames.map((name, index) => (
                      <li
                        key={index}
                        className='flex items-center gap-3 px-5 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-700/20 transition-colors duration-100'
                      >
                        <span className='flex-shrink-0 w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-500 dark:text-indigo-400 text-[10px] font-bold'>
                          {index + 1}
                        </span>
                        <span className='text-sm text-gray-700 dark:text-gray-300 truncate'>{name}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Pick button */}
            <ButtonPrimary
              value='Pick a Name'
              onClick={getNames}
              disabled={isEmpty}
              tooltip={'Add names in settings first'}
              divClass={'w-full'}
            />
          </>
        )}
        </div>
      </div>

      {!isSpinMode && (
        <>
          <Modal
            isOpen={isOpen}
            title={winnerPrompt}
            body={drawnName}
            onClose={(isClose) => setIsOpen(isClose)}
          />
          <ReactCanvasConfetti onInit={getInstance} style={canvasStyles} />
        </>
      )}
    </>
  );
};

export default Wheel;
