const Logo = () => {
  return (
    <div className='py-1.5 flex justify-center items-center font-sans font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-opacity-75'>
      <span className='bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent text-base tracking-tight'>
        Name Roulette
      </span>
      <span className='bg-gradient-to-br from-indigo-500 to-violet-600 ml-2 px-2 py-0.5 rounded-full text-white text-[10px] font-semibold tracking-wide shadow-sm'>
        Web
      </span>
    </div>
  );
};

export default Logo;
