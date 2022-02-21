import {Link} from "react-router-dom";

import Logo from "../Logo";
import DesktopNav from "./DesktopNav";
import Menu from "./MobileNav";
import {useRecoilState} from "recoil";
import {settingsSideBarState} from "../../shared/globalState";
import {ChevronRightIcon} from "@heroicons/react/outline";

const Nav = () => {
  const [isSettingsSideBarOpen, setIsSettingsSideBarOpen] = useRecoilState(settingsSideBarState);

  return(
    <div className='text-center md:text-left md:flex md:justify-between px-12 md:px-14 lg:px-24 py-5 bg-slate-200 dark:bg-slate-800'>
      <Link to="/"><Logo /></Link>
      <DesktopNav/>
      <Menu/>
      <button
        className={`${isSettingsSideBarOpen ? 'visible translate-x-0' : 'invisible translate-x-full lg:translate-x-0'} transform transition duration-200 ease-in-out md:invisible md:hidden hover:cursor-pointer bg-blue-600 p-4 rounded-full fixed bottom-10 right-[18rem] text-white z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        onClick={() => setIsSettingsSideBarOpen(!isSettingsSideBarOpen)}
      >
        <ChevronRightIcon height={28}/>
      </button>
    </div>
  )
}

export default Nav;