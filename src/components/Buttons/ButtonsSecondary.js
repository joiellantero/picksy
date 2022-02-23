const ButtonSecondary = (props) => {
  return (
    <div className={`relative group ${props.divClass}`}>
      {props.disabled && props.tooltip && (
        <span className='tooltip group-hover:opacity-100 group-hover:scale-100'>
        {props.tooltip}
      </span>
      )}
      <button
        className="flex justify-center items-center bg-slate-500 hover:bg-slate-600 focus:outline-none focus:ring focus:ring-slate-300 active:bg-slate-700 px-5 py-2 text-sm leading-5 font-semibold text-white rounded disabled:hover:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-slate-500 h-14 md:h-fit w-full md:w-fit"
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.icon && (
          <span className='mr-3'>
            {props.icon}
          </span>
        )}
        {props.value}
      </button>
    </div>
  );
}
 
export default ButtonSecondary;