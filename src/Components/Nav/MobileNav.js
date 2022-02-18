import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {useDarkMode, useSettingsModalState} from '../../shared/globalState';
import {Link} from "react-router-dom";

import {MenuIcon} from "@heroicons/react/outline";
import { HomeActiveIcon, HomeInactiveIcon, DarkHomeInactiveIcon} from "../../assets/icons/HomeIcon";
import { HelpActiveIcon, HelpInactiveIcon, DarkHelpInactiveIcon} from "../../assets/icons/HelpIcon";
import { SunActiveIcon, SunInactiveIcon, MoonActiveIcon, MoonInactiveIcon, DarkMoonInactiveIcon} from "../../assets/icons/SunIcon";
import { SettingsActiveIcon, SettingsInactiveIcon, DarkSettingsInactiveIcon} from "../../assets/icons/SettingsIcon2";

const MenuWindow = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useDarkMode();
  const [isSettingsOpen, setIsSettingsOpen] = useSettingsModalState();

  return(
    <div className="w-56 text-right fixed bottom-[22rem] right-8 z-10">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="visible md:invisible md:hidden hover:cursor-pointer bg-blue-600 p-4 rounded-full fixed bottom-10 right-8 text-white z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <MenuIcon
              height={30}
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-bottom-right bg-slate-100 dark:bg-slate-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link to="/">
                    <button
                      className={`${
                        active ? 'bg-blue-500 text-white' : 'text-gray-900 dark:text-slate-200'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm leading-10`}
                    >
                      {active ? (
                        <HomeActiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        isDarkModeEnabled ? (
                          <DarkHomeInactiveIcon
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                          />
                        ) : (
                          <HomeInactiveIcon
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                          />
                        )
                      )}
                      Home
                    </button>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'text-gray-900 dark:text-slate-200'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm leading-10`}
                  >
                    {active ? (
                      <HelpActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      isDarkModeEnabled ? (
                        <DarkHelpInactiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      ): (
                        <HelpInactiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      )
                    )}
                    Help
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'text-gray-900 dark:text-slate-200'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm leading-10`}
                    onClick={() => setIsDarkModeEnabled(!isDarkModeEnabled)}
                  >
                    {isDarkModeEnabled ? (
                      active ? (
                        <MoonActiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        isDarkModeEnabled ? (
                          <DarkMoonInactiveIcon
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                          />
                        ) : (
                          <MoonInactiveIcon
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                          />
                        )
                      )
                    ) : (
                      active ? (
                        <SunActiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <SunInactiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      )
                    )}
                    Toggle Theme
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'text-gray-900 dark:text-slate-200'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm leading-10`}
                    onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                  >
                    {active ? (
                      <SettingsActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      isDarkModeEnabled ? (
                        <DarkSettingsInactiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <SettingsInactiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      )
                    )}
                    Settings
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default MenuWindow;