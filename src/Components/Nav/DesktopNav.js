import { Link } from 'react-router-dom'
import { useDarkMode, useSettingsModalState } from '../../shared/globalState';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import PopoverMenu from "../PopoverMenu";
import ButtonSettings from "../Buttons/ButtonSettings";

import FeaturesIcon from '../../assets/icons/FeaturesIcon';
import FaqIcon from "../../assets/icons/FaqIcon";
import FeedbackIcon from "../../assets/icons/FeedbackIcon";

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
  const [isSettingsOpen, setIsSettingsOpen] = useSettingsModalState();

  const handleChange = (checked) => {
    setChecked(checked);
    setIsDarkModeEnabled(!isDarkModeEnabled);
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
          size={25}
        />
        <ButtonSettings
          onClick={() => setIsSettingsOpen(!isSettingsOpen)}
        />
      </div>
    </>
  );
};

export default DesktopNav;