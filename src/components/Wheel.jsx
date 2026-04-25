import {useState, useCallback, useRef, useEffect} from 'react';
import {useAtom, useAtomValue} from "jotai";
import {namesListState, winnerMessageState, spinModeState} from "../shared/globalState";
import useConfetti, { confettiStyles } from '../shared/useConfetti';

import ButtonPrimary from './Buttons/ButtonPrimary';
import Modal from './Modals/Modal';
import SpinWheel from './SpinWheel';

import ReactCanvasConfetti from "react-canvas-confetti";

const Wheel = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [drawnName, setDrawnName] = useState();
  const winnerMessageValue = useAtomValue(winnerMessageState);
  const [namesList, setNamesList] = useAtom(namesListState);
  const [isSpinMode, setIsSpinMode] = useAtom(spinModeState);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const containerRef = useRef(null);
  const { getInstance, fire } = useConfetti();

  const getCleanNames = () => {
    const raw = typeof namesList === 'string' ? namesList : '';
    return raw
      .split("\n")
      .map(item => item.replace(/\s+$/, ""))
      .filter(item => item !== '');
  };

  const cleanedNames = getCleanNames();

  const getNames = () => {
    const drawn = cleanedNames[Math.floor(Math.random() * cleanedNames.length)];
    setDrawnName(drawn);
    setIsOpen(true);
    fire();
    if (props.removeName) {
      setNamesList(cleanedNames.filter(n => n !== drawn).join("\n"));
    }
  };

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(f => {
      if (f) setZoom(1);
      return !f;
    });
  }, []);
  const zoomIn  = useCallback(() => setZoom(z => Math.min(+(z + 0.1).toFixed(1), 1.5)), []);
  const zoomOut = useCallback(() => setZoom(z => Math.max(+(z - 0.1).toFixed(1), 0.5)), []);

  useEffect(() => {
    document.body.style.overflow = isFullscreen ? 'hidden' : '';
    if (isFullscreen) {
      document.body.classList.add('fullscreen-mode');
    } else {
      document.body.classList.remove('fullscreen-mode');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('fullscreen-mode');
    };
  }, [isFullscreen]);

  useEffect(() => {
    if (!isFullscreen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsFullscreen(false);
        setZoom(1);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
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
          ? 'fixed inset-0 z-40 bg-gray-50 dark:bg-[#0c0c14] flex flex-col items-center'
          : 'flex flex-col items-center gap-6 w-full py-8 px-4 sm:px-6'
        }
      >
        <div
          className={isFullscreen ? 'w-full max-w-lg mx-auto flex flex-col gap-6 items-center flex-1 min-h-0 py-4 px-4' : 'contents'}
        >

        {/* Page header — hidden in fullscreen */}
        {!isFullscreen && (
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
        )}

        {/* Mode toggle + fullscreen + zoom */}
        <div className='flex items-center gap-2 self-center'>
          <div className='flex items-center p-1 bg-gray-100 dark:bg-gray-800/60 rounded-xl'>
            <button
              onClick={() => setIsSpinMode(false)}
              className={`flex items-center gap-1.5 px-4 py-2.5 sm:px-3 sm:py-1.5 rounded-lg text-sm sm:text-xs font-medium transition-all duration-150 cursor-pointer ${
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
              className={`flex items-center gap-1.5 px-4 py-2.5 sm:px-3 sm:py-1.5 rounded-lg text-sm sm:text-xs font-medium transition-all duration-150 cursor-pointer ${
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
          {isFullscreen && (
            <div className='flex items-center gap-1 bg-gray-100 dark:bg-gray-800/60 rounded-xl p-1'>
              <button
                onClick={zoomOut}
                disabled={zoom <= 0.5}
                className='w-7 h-7 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all duration-150 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed text-base font-medium leading-none'
                title='Zoom out'
              >
                −
              </button>
              <span className='text-xs font-medium text-gray-500 dark:text-gray-400 w-9 text-center tabular-nums'>
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={zoomIn}
                disabled={zoom >= 1.5}
                className='w-7 h-7 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all duration-150 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed text-base font-medium leading-none'
                title='Zoom in'
              >
                +
              </button>
            </div>
          )}
          <button
            onClick={toggleFullscreen}
            className='p-2 rounded-xl text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-all duration-150 cursor-pointer [-webkit-tap-highlight-color:transparent]'
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
          <div className={isFullscreen ? 'flex-1 min-h-0 flex items-center justify-center w-full' : 'contents'}>
            <div style={isFullscreen ? { transform: `scale(${zoom})`, transformOrigin: 'center', transition: 'transform 150ms ease' } : undefined}>
              <SpinWheel removeName={props.removeName} />
            </div>
          </div>
        ) : (
          <>
            {/* Names card */}
            <div
              className='w-full card overflow-hidden animate-slide-up'
              style={isFullscreen ? { transform: `scale(${zoom})`, transformOrigin: 'center top', transition: 'transform 150ms ease' } : undefined}
            >
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
          <ReactCanvasConfetti onInit={getInstance} style={confettiStyles} />
        </>
      )}
    </>
  );
};

export default Wheel;
