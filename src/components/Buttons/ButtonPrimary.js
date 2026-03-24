const ButtonPrimary = (props) => {
  return (
    <div className={`relative group ${props.divClass}`}>
      {props.disabled && props.tooltip && (
        <span className='tooltip group-hover:opacity-100 group-hover:scale-100'>
          {props.tooltip}
        </span>
      )}
      <button
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 active:from-indigo-700 active:to-violet-800 focus:outline-none focus-visible:outline-none px-6 py-3 text-sm font-semibold text-white rounded-xl shadow-md hover:shadow-lg transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:from-indigo-500 disabled:hover:to-violet-600 disabled:shadow-none"
        onClick={props.onClick}
        disabled={props.disabled}
      >
        <svg className='w-4 h-4 flex-shrink-0' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
        </svg>
        {props.value}
      </button>
    </div>
  );
};

export default ButtonPrimary;
