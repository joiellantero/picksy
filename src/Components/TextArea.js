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
        <textarea
          className="form-control block px-3 py-1.5 w-full max-w-xs text-base font-normal text-slate-700 dark:text-slate-300 bg-clip-padding dark:bg-slate-800 bg-slate-200 rounded transition ease-in-out m-0 focus:text-slate-700 focus:bg-slate-300 dark:focus:bg-[#162338] focus:outline-none"
          value={props.value}
          rows={props.rows}
          id={props.id}
          onChange={props.onChange}
        />
      )
  )
}

export default TextArea;