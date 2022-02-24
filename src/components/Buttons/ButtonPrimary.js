const ButtonPrimary = (props) => {
  return (
    <div className={`relative group ${props.divClass}`}>
      {props.disabled && props.tooltip &&(
          <span className='tooltip group-hover:opacity-100 group-hover:scale-100'>
        {props.tooltip}
      </span>
      )}
      <button
      className="bg-blue-500 hover:bg-blue-600 focus:outline-none active:bg-blue-700 px-5 py-2 text-sm leading-5 font-semibold text-white rounded disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500 h-14 md:h-fit w-full md:w-fit"
      onClick={props.onClick}
      disabled={props.disabled}
      >
        {props.value}
      </button>
    </div>
  );
}
 
export default ButtonPrimary;