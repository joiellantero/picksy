const Input = (props) => {
  return ( 
    <div>
      <label
        htmlFor={props.id}
        className="form-label inline-block mb-2"
      >
          {props.label}
      </label>
      <div className={'relative'}>
        <input
          id={props.id}
          rows="5"
          className="form-control block max-w-xs px-3 py-1.5 text-base font-normal text-gray-700 dark:text-gray-300 bg-clip-padding dark:bg-slate-800 bg-slate-200 focus:bg-slate-300 dark:focus:bg-[#162338] rounded transition ease-in-out m-0 focus:outline-none h-14 md:h-fit w-full"
          onChange={(e) => props.onChange(e.target.value)}
          value={props.value}
          maxLength={60}
        />
        {props.value.length !== 0 &&(
          <button
            className={'absolute top-0 right-0 rounded-full z-10 top-1/2 transform -translate-y-1/2 mr-3 cursor-pointer text-xs bg-slate-700/50 hover:bg-slate-700 py-1 px-1.5 transition transition-all duration-200 ease-out'}
            onClick={props.onClear}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
 
export default Input;