import { useState } from 'react';

const List = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return(
    <div className='flex flex-col w-1/4'>
      <label 
        for="listInput" 
        className="form-label inline-block mb-2 text-gray-700"
      >
        Enter names
      </label>
      <textarea
        className="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        id="listInput"
        rows="5"
        onChange={handleChange}
      />
      <input
        value={value}
      ></input>
    </div>
  );
};

export default List;