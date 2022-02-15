const Input = (props) => {
  return ( 
    <div>
      <label
        htmlFor={props.id}
        className="form-label inline-block mb-2"
      >
          {props.label}
      </label>
      <input
        id={props.id} 
        rows="5"
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 dark:text-gray-300 bg-clip-padding dark:bg-slate-800 bg-slate-100 rounded transition ease-in-out m-0 focus:outline-none"
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
}
 
export default Input;