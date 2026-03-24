import { Fragment } from "react";
import { Popover, Transition } from '@headlessui/react';
import {ChevronDownIcon} from "@heroicons/react/24/solid";

const PopoverMenu = (props) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`px-3 py-2 rounded-lg text-sm font-medium inline-flex items-center gap-1.5 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-opacity-75 ${
              open
                ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60'
            }`}
          >
            <span>{props.label}</span>
            <ChevronDownIcon
              className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180 text-indigo-500' : ''}`}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-72 mt-2 transform -translate-x-1/2 left-1/2">
              <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 dark:ring-white/5">
                <div className="grid gap-1 bg-white dark:bg-gray-800 p-2">
                  {props.links.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 p-3 rounded-xl transition-colors duration-150 hover:bg-gray-50 dark:hover:bg-gray-700/50 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-900 flex items-center justify-center text-indigo-500 dark:text-indigo-400">
                        <item.icon aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{item.name}</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{item.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3">
                  <a
                    href="https://github.com/joiellantero/name-roulette-web.git"
                    className="flex items-center gap-2.5 text-sm hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors focus:outline-none"
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <svg className="w-4 h-4 flex-shrink-0 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300">{props.footerTitle}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">{props.footerSubTitle}</p>
                    </div>
                  </a>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default PopoverMenu;
