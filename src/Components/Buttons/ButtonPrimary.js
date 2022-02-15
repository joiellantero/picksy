const ButtonPrimary = (props) => {
  return (
    <div className="relative my-5 group">
      <button
      className="py-2 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white focus:outline-none rounded disabled:opacity-75 disabled:cursor-not-allowed"
      onClick={props.onClick}
      disabled={props.disabled}
      >
        {props.value}
      </button>
      {props.disabled && (
        <span className='tooltip group-hover:scale-100'>
          {props.tooltip}
        </span>
      )}
    </div>
  );
}
 
export default ButtonPrimary;