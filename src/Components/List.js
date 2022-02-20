import React from 'react';

import ButtonSecondary from './Buttons/ButtonsSecondary';
import TextArea from "./TextArea";

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
        <TextArea
          value={props.value}
          rows={'10'}
          id={'listInput'}
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