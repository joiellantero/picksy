import { Link } from 'react-router-dom'
import { useDarkMode } from '../shared/globalState';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import PopoverMenu from "./PopoverMenu";
import Logo from './Logo';

import {MenuIcon} from "@heroicons/react/outline";
import FeaturesIcon from '../assets/icons/FeaturesIcon';
import FaqIcon from "../assets/icons/FaqIcon";
import FeedbackIcon from "../assets/icons/FeedbackIcon";
import SettingsIcon from "../assets/icons/SettingsIcon";

const helpLinks = [
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
    <div className='text-center md:text-left md:flex md:justify-between px-12 md:px-14 lg:px-24 py-10'>
      <div className='py-2 flex justify-center items-center font-serif font-bold text-2xl md:text-lg focus:outline-none  focus-visible:ring-2 focus-visible:ring-blue-600 dark:focus-visible:ring-white focus-visible:ring-opacity-75'>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="items-center justify-center gap-6 hidden md:flex ">
        <Link to="/">Home</Link>
        <PopoverMenu
          links={helpLinks}
          label={'Help'}
          footerTitle={'Documentation'}
          footerSubTitle={'Learn how to use Name Roulette'}
        />
      </div>
      <div className='py-2 justify-center items-center gap-4 hidden md:flex '>
        <DarkModeSwitch
          checked={checked}
          onChange={handleChange}
          size={25}
        />
        <SettingsIcon
          height={7}
          width={7}
        />
      </div>
      <MenuIcon
        height={60}
        className={"visible md:invisible md:hidden hover:cursor-pointer bg-blue-600 p-4 rounded-full fixed bottom-12 right-8 text-white"}
      />
    </div>
  );
};

export default Nav;