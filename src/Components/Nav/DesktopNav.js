import { Link } from 'react-router-dom'
import { useDarkMode } from '../../shared/globalState';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import PopoverMenu from "../PopoverMenu";

import FeaturesIcon from '../../assets/icons/FeaturesIcon';
import FaqIcon from "../../assets/icons/FaqIcon";
import FeedbackIcon from "../../assets/icons/FeedbackIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";

const helpLinks = [
  {
    name: 'Features',
    description: 'Discover the possibilities',
    href: "/features",
    icon: FeaturesIcon,
  },
  {
    name: 'FAQs',
    description: 'Need help with this website?',
    href: '/help',
    icon: FaqIcon,
  },
  {
    name: 'Feedback',
    description: 'Leave us a feedback',
    href: '##',
    icon: FeedbackIcon,
  },
  {
    name: 'About the Developer',
    description: 'Learn more about the person behind Name Roulette Web',
    href: '##',
    icon: FeedbackIcon,
  },
]

const DesktopNav = () => {
  const [checked, setChecked] = useDarkMode();
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useDarkMode();
  const toggleDarkMode = () => setIsDarkModeEnabled(!isDarkModeEnabled);

  const handleChange = (checked) => {
    setChecked(checked);
    toggleDarkMode();
  };

  return(
    <>
      <div className="items-center justify-center gap-6 hidden md:flex ">
        <Link to="/">Home</Link>
        <PopoverMenu
          links={helpLinks}
          label={'Help'}
          footerTitle={'Documentation'}
          footerSubTitle={'Learn how to use Name Roulette'}
        />
      </div>
      <div className='py-2 justify-center items-center gap-4 hidden md:flex'>
        <DarkModeSwitch
          checked={checked}
          onChange={handleChange}
          size={55}
        />
        <SettingsIcon
          height={8}
          width={8}
        />
      </div>
    </>
  );
};

export default DesktopNav;