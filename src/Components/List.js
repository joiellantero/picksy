import React from 'react';

import TextArea from "./TextArea";
import ButtonUpload from './Buttons/ButtonUpload';

import UploadIcon from '../assets/icons/UploadIcon';

const List = (props) => {
  return(
    <>
      <form className='flex flex-col'>
        <label 
          htmlFor="listInput" 
          className="form-label inline-block mb-2"
        >
          {props.label}
        </label>
        <TextArea
          value={props.value}
          rows={'10'}
          id={'listInput'}
          onChange={(e) => props.onChange(e.target.value)}
          onClear={props.onClear}
        />
      </form>
      <ButtonUpload
        icon={<UploadIcon/>}
        id={'namesListFile'}
        name={'namesListFile'}
        onUpload={(e) => props.onChange(e)}
      />
    </>
  );
};

export default List;