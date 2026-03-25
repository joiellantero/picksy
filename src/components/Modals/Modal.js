import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import {darkModeState} from '../../shared/globalState';
import {useRecoilValue} from "recoil";

const Modal = (props) => {
  const isDarkModeEnabled = useRecoilValue(darkModeState);

  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog
        as="div"
        className={`fixed inset-0 z-[60] overflow-y-auto ${isDarkModeEnabled ? 'dark' : ''}`}
        onClose={() => props.onClose(false)}
      >
        <div className="min-h-screen px-4 flex items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-90 translate-y-4"
            enterTo="opacity-100 scale-100 translate-y-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100 translate-y-0"
            leaveTo="opacity-0 scale-90 translate-y-4"
          >
            <div
              className="relative w-full max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 text-center cursor-pointer ring-2 ring-violet-500/40 dark:ring-violet-500/30"
              onClick={() => props.onClose(false)}
            >

              <Dialog.Title
                as="p"
                className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-5"
              >
                {props.title}
              </Dialog.Title>

              <p className="text-5xl font-extrabold bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent break-words leading-tight py-2">
                {props.body}
              </p>

              <p className='mt-8 text-xs text-gray-300 dark:text-gray-600 tracking-wide'>
                Tap anywhere to close
              </p>

              <button className="h-0 w-0 overflow-hidden" />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
