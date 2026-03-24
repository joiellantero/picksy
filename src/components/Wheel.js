import {useState, useCallback, useRef} from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import {namesListState, winnerMessageState} from "../shared/globalState";

import ButtonPrimary from './Buttons/ButtonPrimary';
import Modal from './Modals/Modal';

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

  const isEmpty = cleanedNames.length === 0;
  const winnerPrompt = winnerMessageValue && winnerMessageValue.length > 0
    ? winnerMessageValue
    : '🎉 And the winner is...';

  return (
    <>
      <div className='flex flex-col items-center gap-6 w-full py-8 px-4 sm:px-6'>

        {/* Page header */}
        <div className='text-center'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Pick a Random Name
          </h1>
          <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
            {isEmpty
              ? 'Add names in settings to get started'
              : `${cleanedNames.length} participant${cleanedNames.length !== 1 ? 's' : ''} in the draw`}
          </p>
        </div>

        {/* Names card */}
        <div className='w-full card overflow-hidden animate-slide-up'>
          {isEmpty ? (
            <div className='flex flex-col items-center justify-center py-16 px-6 text-center'>
              <div className='w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center mb-4'>
                <svg className='w-7 h-7 text-indigo-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                </svg>
              </div>
              <p className='text-sm font-medium text-gray-500 dark:text-gray-400'>No participants yet</p>
              <p className='mt-1 text-xs text-gray-400 dark:text-gray-500'>Open settings to add names</p>
            </div>
          ) : (
            <>
              <div className='px-5 py-3 border-b border-gray-100 dark:border-gray-700/50 flex items-center justify-between'>
                <span className='section-label'>Participants</span>
                <span className='text-xs font-bold bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2.5 py-0.5 rounded-full'>
                  {cleanedNames.length}
                </span>
              </div>
              <ul className='divide-y divide-gray-50 dark:divide-gray-700/30 max-h-96 overflow-y-auto'>
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

        {/* Spin button */}
        <ButtonPrimary
          value='Pick a Name'
          onClick={getNames}
          disabled={isEmpty}
          tooltip={'Add names in settings first'}
          divClass={'w-full'}
        />
      </div>

      <Modal
        isOpen={isOpen}
        title={winnerPrompt}
        body={drawnName}
        onClose={(isClose) => setIsOpen(isClose)}
      />
      <ReactCanvasConfetti onInit={getInstance} style={canvasStyles} />
    </>
  );
};

export default Wheel;
