const inputClass = "block w-full rounded-xl px-3 py-2 text-sm text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700/50 placeholder-gray-400 dark:placeholder-gray-600 outline-none appearance-none [-webkit-tap-highlight-color:transparent] focus:border-gray-200 dark:focus:border-gray-700/50 focus:ring-2 focus:ring-indigo-500/40 focus:ring-offset-0 resize-none";

const TextArea = (props) => {
  return (
    props.readOnly ? (
      <textarea
        className={inputClass}
        value={props.value}
        rows={props.rows}
        id={props.id}
        onChange={props.onChange}
        placeholder={props.placeholder}
        readOnly
        aria-label={props.label}
        aria-required="true"
      />
    ) : (
      <div className='relative'>
        <textarea
          className={inputClass}
          value={props.value}
          rows={props.rows}
          id={props.id}
          onChange={props.onChange}
          placeholder={props.placeholder}
          aria-label={props.label}
          aria-required="true"
        />
        {props.value.length !== 0 && (
          <button
            type="button"
            className='absolute top-2 right-2 rounded-lg text-xs font-medium px-2 py-1 text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition'
            onClick={props.onClear}
            aria-label={`clear ${props.label} input`}
          >
            Clear
          </button>
        )}
      </div>
    )
  )
}

export default TextArea;
