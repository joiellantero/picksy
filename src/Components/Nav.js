import { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { useDarkMode } from '../shared/globalState';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import FeaturesIcon from '../assets/icons/FeaturesIcon';
import FaqIcon from "../assets/icons/FaqIcon";
import FeedbackIcon from "../assets/icons/FeedbackIcon";

const help = [
  {
    name: 'Features',
    description: 'Discover the possiblities',
    href: "/features",
    icon: FeaturesIcon,
  },
  {
    name: 'FAQs',
    description: 'Frequently asked questions',
    href: '/help',
    icon: FaqIcon,
  },
  {
    name: 'Feedback',
    description: 'Leave us a feedback',
    href: '##',
    icon: FeedbackIcon,
  },
]

const Nav = () => {
  const [checked, setChecked] = useDarkMode();
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useDarkMode();
  const toggleDarkMode = () => setIsDarkModeEnabled(!isDarkModeEnabled);

  const handleChange = (checked) => {
    setChecked(checked);
    toggleDarkMode();
  };

  return(
    <div className='flex justify-between px-24 py-10'>
      <div className='py-2 flex justify-center items-center font-serif font-bold'>
        <Link to="/">Name Roulette</Link>
      </div>
      <div className="flex items-center justify-center gap-6">
        <Link to="/">Home</Link>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                  ${open ? 'text-blue-600 group bg-blue-200' : 'text-opacity-90'}
                  px-3 py-2 rounded inline-flex items-center text-base hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span>Help</span>
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
                      {help.map((item) => (
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
                      >
                        <span className="flex items-center">
                          <span className="text-sm font-medium text-slate-900 dark:text-white">
                            Documentation
                          </span>
                        </span>
                        <span className="block text-sm text-slate-500">
                          Learn how to use Name Roulette
                        </span>
                      </a>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
      <div className='py-2 flex justify-center items-center gap-4'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
        <DarkModeSwitch
          checked={checked}
          onChange={handleChange}
          size={25}
        />
      </div>
    </div>
  );
};

export default Nav;