const TextField = (props) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={props.id}
        className="text-xs font-medium text-gray-500 dark:text-gray-400"
      >
        {props.label}
      </label>
      <div className='relative'>
        <input
          id={props.id}
          aria-label={props.label}
          aria-required="true"
          className="block w-full rounded-xl px-3 py-2 text-sm text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700/50 placeholder-gray-400 dark:placeholder-gray-600 outline-none appearance-none [-webkit-tap-highlight-color:transparent] focus:border-gray-200 dark:focus:border-gray-700/50 focus:ring-2 focus:ring-indigo-500/40 focus:ring-offset-0 pr-16"
          onChange={(e) => props.onChange(e.target.value)}
          value={props.value}
          placeholder={props.placeholder}
          maxLength={60}
        />
        {props.value.length !== 0 && (
          <button
            type="button"
            className='absolute right-2 top-1/2 -translate-y-1/2 rounded-lg text-xs font-medium px-2 py-1 text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition cursor-pointer'
            onClick={props.onClear}
            aria-label={`clear ${props.label} input`}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default TextField;
