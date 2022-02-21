const Logo = () => {
  return(
    <div className='py-2 flex justify-center items-center font-serif font-bold focus:outline-none  focus-visible:ring-2 focus-visible:ring-blue-600 dark:focus-visible:ring-white focus-visible:ring-opacity-75'
    >
      <div className={'pt-0.5'}>
        Name Roulette
      </div>
      <small className={'bg-blue-600 ml-1.5 px-2.5 py-0 pt-1 rounded-full text-white'}>
        Web
      </small>
    </div>
  )
}

export default Logo;
