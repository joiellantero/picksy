// TODO create secondary button

const ButtonSecondary = (props) => {
  return (
    <div className={`relative group ${props.divClass}`}>
      {props.disabled && props.tooltip && (
        <span className='tooltip group-hover:opacity-100 group-hover:skew-y-0'>
        {props.tooltip}
      </span>
      )}
      <button
        className="flex justify-center items-center py-2 px-4 bg-slate-600 hover:bg-slate-700 active:bg-slate-800 text-white focus:outline-none rounded disabled:hover:cursor-not-allowed disabled:opacity-75 disabled:hover:bg-slate-600 h-14 md:h-fit w-full md:w-fit"
        onClick={props.onClick}
        disabled={props.disabled}
      >
      <span className='mr-3'>
        {props.icon}
      </span>
        {props.value}
      </button>
    </div>
  );
}
 
export default ButtonSecondary;