import { React } from 'react';

const List = (props) => {
  return(
    <div className='flex flex-col w-1/4'>
      <label 
        htmlFor="listInput" 
        className="form-label inline-block mb-2"
      >
        Enter names
      </label>
      <textarea
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 dark:text-gray-300 bg-clip-padding dark:bg-slate-800 bg-slate-100 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-slate-200 focus:outline-none"
        id="listInput"
        rows="5"
        onChange={(e) => props.onChange(e.target.value) }
      />
    </div>
  );
};

export default List;