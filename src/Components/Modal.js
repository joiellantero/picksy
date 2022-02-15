import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import { useDarkMode } from '../Shared/globalState';

const Modal = (props) => {
  const [isDarkModeEnabled] = useDarkMode();

  return(
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog
        as="div"
        className={`fixed inset-0 z-10 overflow-y-auto ${isDarkModeEnabled ? 'dark' : ''}`}
        onClose={() => props.onClose(false)}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-10" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden align-middle transition-all transform dark:bg-slate-700 bg-white shadow-md rounded text-center">
              <Dialog.Title
                as="h3"
                className="text-base font-medium leading-6 text-slate-400 dark:text-slate-400"
              >
                {props.title}
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-5xl text-blue-700 dark:text-slate-100">
                  {props.body}
                </p>
              </div>

              <div className="mt-4 flex gap-2 justify-center">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-600 border border-transparent rounded hover:bg-slate-200 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-500"
                  onClick={() => props.onClose(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;