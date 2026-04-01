import {Link} from "react-router-dom";

import Logo from "../../assets/Logo";
import DesktopNav from "./DesktopNav";

const Nav = () => {
  return (
    <header className='sticky top-0 z-50 bg-white/90 dark:bg-[#0c0c14]/90 backdrop-blur-md'>
      <div className='flex items-center justify-between px-6 md:px-10 lg:px-16 py-3'>
        <Link to="/"><Logo /></Link>
        <DesktopNav />
      </div>
      {/* Gradient bottom border */}
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
    </header>
  );
};

export default Nav;
