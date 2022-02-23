import { Fragment } from "react";
import { Popover, Transition } from '@headlessui/react'
import {ChevronDownIcon} from "@heroicons/react/solid";

const PopoverMenu = (props) => {
  return(
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                  ${open ? 'text-blue-600 group bg-blue-200' : 'text-opacity-90'}
                  px-3 py-2 rounded inline-flex items-center text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span>{props.label}</span>
            <ChevronDownIcon
              className={`${open ? 'transform rotate-90 text-blue-600' : 'text-opacity-70'}
                    ml-2 h-5 w-5 group-hover:text-opacity-80 transition ease-in-out duration-150`}
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
            <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white dark:bg-slate-700 p-7 lg:grid-cols-2">
                  {props.links.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded hover:bg-slate-50 dark:hover:bg-[#2d3c51] focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white  sm:h-12 sm:w-12">
                        <item.icon aria-hidden="true" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                          {item.name}
                        </p>
                        <p className="text-sm text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800">
                  <a
                    href="https://github.com/joiellantero/name-roulette-web.git"
                    className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded hover:bg-slate-100 dark:hover:bg-[#212d40] focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
                    target={'__blank'}
                  >
                        <span className="flex items-center">
                          <span className="text-sm font-medium text-slate-900 dark:text-white">
                            {props.footerTitle}
                          </span>
                        </span>
                    <span className="block text-sm text-slate-500">
                          {props.footerSubTitle}
                        </span>
                  </a>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default PopoverMenu;
