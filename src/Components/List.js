import { useState } from 'react';

const List = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return(
    <div className='flex flex-col w-1/4'>
      <label 
        htmlFor="listInput" 
        className="form-label inline-block mb-2"
      >
        Enter names
      </label>
      <textarea
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 dark:text-gray-300 bg-clip-padding dark:bg-slate-800 bg-slate-100 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-slate-200 focus:border-blue-600 focus:outline-none
        "
        id="listInput"
        rows="5"
        onChange={handleChange}
      />
      <textarea
        value={value}
        readOnly
        className='form-control dark:bg-slate-800 dark:text-gray-500 bg-slate-100 focus:outline-none px-3 py-1.5'
      ></textarea>
    </div>
  );
};

export default List;