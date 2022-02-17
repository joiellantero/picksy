import React from 'react';
import ButtonSecondary from './Buttons/ButtonsSecondary';
import UploadIcon from '../assets/icons/UploadIcon';

const List = (props) => {
  return(
    <>
      <div className='flex flex-col'>
        <label 
          htmlFor="listInput" 
          className="form-label inline-block mb-2"
        >
          Enter names
        </label>
        <textarea
          className="form-control block px-3 py-1.5 w-80 md:w-60 text-base font-normal text-slate-700 dark:text-slate-300 bg-clip-padding dark:bg-slate-800 bg-slate-200 rounded transition ease-in-out m-0 focus:text-slate-700 focus:bg-slate-300 dark:focus:bg-[#162338] focus:outline-none"
          id="listInput"
          rows="10"
          onChange={(e) => props.onChange(e.target.value)}
        />
      </div>
      <ButtonSecondary
        icon={<UploadIcon/>}
        value={'Upload File'}
        disabled={true}
        tooltip={'Coming Soon'}
      />
    </>
  );
};

export default List;