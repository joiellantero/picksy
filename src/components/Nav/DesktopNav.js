import { Link, useLocation } from 'react-router-dom';
import { darkModeState } from '../../shared/globalState';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useRecoilState } from 'recoil';

const DesktopNav = () => {
  const { pathname } = useLocation();
  const [checked, setChecked] = useRecoilState(darkModeState);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useRecoilState(darkModeState);

  const handleChange = (checked) => {
    setChecked(checked);
    setIsDarkModeEnabled(!isDarkModeEnabled);
  };

  const navLinkClass = (path) =>
    `relative px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
      pathname === path
        ? 'text-indigo-600 dark:text-indigo-400'
        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60'
    }`;

  return (
    <>
      <nav className="items-center justify-center gap-1 hidden md:flex">
        <Link to="/" className={navLinkClass('/')}>
          Home
          {pathname === '/' && (
            <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-500" />
          )}
        </Link>
        <Link to="/features" className={navLinkClass('/features')}>
          Features
          {pathname === '/features' && (
            <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-500" />
          )}
        </Link>
        <Link to="/help" className={navLinkClass('/help')}>
          FAQs
          {pathname === '/help' && (
            <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-500" />
          )}
        </Link>
        <a
          href="https://github.com/joiellantero/picksy"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60"
        >
          Documentation
        </a>
      </nav>
      <div className='hidden md:flex items-center gap-3'>
        <div className="h-5 w-px bg-gray-200 dark:bg-gray-700" />
        <DarkModeSwitch
          checked={checked}
          onChange={handleChange}
          size={18}
          moonColor="#818cf8"
          sunColor="#f59e0b"
        />
      </div>
    </>
  );
};

export default DesktopNav;
