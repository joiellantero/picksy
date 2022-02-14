import React from 'react';

const Wheel = (props) => {
  return(
    <div className='flex justify-center flex-col'>
      <label 
        htmlFor="wheelOutput" 
        className="form-label inline-block mb-2"
      >
        Wheel Output
      </label>
      <textarea
        value={props.wheelData}
        readOnly
        rows="5"
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 dark:text-gray-300 bg-clip-padding dark:bg-slate-800 bg-slate-100 rounded transition ease-in-out m-0 focus:outline-none"
        id="wheelOutput"
      ></textarea>
    </div>
  );
};

export default Wheel;