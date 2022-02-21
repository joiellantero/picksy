const TextArea = (props) => {
  return(
    props.readOnly ? (
        <textarea
          className="form-control block w-full max-w-xs px-3 py-1.5 text-base font-normal text-gray-700 dark:text-gray-300 bg-clip-padding dark:bg-slate-800 bg-slate-200 rounded transition ease-in-out m-0 focus:outline-none"
          value={props.value}
          rows={props.rows}
          id={props.id}
          onChange={props.onChange}
          readOnly
        />
      ) : (
        <div className={'relative'}>
          <textarea
            className="form-control block px-3 py-1.5 w-full max-w-xs text-base font-normal text-slate-700 dark:text-slate-300 bg-clip-padding dark:bg-slate-800 bg-slate-200 rounded transition ease-in-out m-0 focus:text-slate-700 focus:bg-slate-300 dark:focus:bg-[#162338] focus:outline-none"
            value={props.value}
            rows={props.rows}
            id={props.id}
            onChange={props.onChange}
          />
          {props.value.length !== 0 &&(
            <button
              className={'absolute top-0 right-0 rounded-full z-10 m-2 cursor-pointer text-xs bg-slate-700/50 hover:bg-slate-700 py-1 px-1.5 transition transition-all duration-200 ease-out'}
              onClick={props.onClick}
            >
              Clear
            </button>
          )}
        </div>
      )
  )
}

export default TextArea;