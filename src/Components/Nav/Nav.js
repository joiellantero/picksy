import {Link} from "react-router-dom";
import {useSettingsModalState} from "../../shared/globalState";

import Logo from "../Logo";
import DesktopNav from "./DesktopNav";
import Menu from "./MobileNav";
import SettingsModal from "../Modals/SettingsModal";

const Nav = () => {
  let [isOpen, setIsOpen] = useSettingsModalState();

  return(
    <div className='text-center md:text-left md:flex md:justify-between px-12 md:px-14 lg:px-24 py-10'>
      <div className='py-2 flex justify-center items-center font-serif font-bold text-lg focus:outline-none  focus-visible:ring-2 focus-visible:ring-blue-600 dark:focus-visible:ring-white focus-visible:ring-opacity-75'>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <DesktopNav/>
      <Menu/>
      <SettingsModal
        isOpen={isOpen}
        title={'settings'}
        body={'body of settings'}
        onClose={(isClose) => setIsOpen(isClose)}
      />
    </div>
  )
}

export default Nav;