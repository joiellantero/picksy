import {Fragment} from "react";
import {useDarkMode} from "../../shared/globalState";
import {Dialog, Transition} from "@headlessui/react";

import CloseIcon from "../../assets/icons/CloseIcon";

const SettingsModal = (props) => {
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
            <Dialog.Overlay className="fixed inset-0 opacity-0" />
          </Transition.Child>

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
            <div
              className="inline-block w-full max-w-md p-10 my-8 overflow-hidden align-middle duration-100 transition-all ease-in-out transform dark:bg-slate-700 bg-white shadow-md rounded text-center hover:border-4 dark:border-slate-600 border-slate-200 hover:cursor-pointer group"
              onClick={() => props.onClose(false)}
            >
              <Dialog.Title
                as="h3"
                className="text-base font-medium leading-6 text-slate-400 dark:text-slate-400"
              >
                {props.title}
              </Dialog.Title>
              <div className="mt-5">
                <p className="text-5xl text-blue-700 dark:text-slate-100">
                  {props.body}
                </p>
              </div>

              <div
                className="absolute top-4 right-4 justify-center text-sm font-medium text-slate-500 dark:text-slate-400 border border-transparent rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-500 scale-0 group-hover:scale-100 transition-all transform origin-top-right"
              >
                <CloseIcon color={`${isDarkModeEnabled ? '#64748b' : '#cbd5e1'}`}/>
              </div>
              <button className="h-0 w-0 overflow-hidden"/>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default SettingsModal;