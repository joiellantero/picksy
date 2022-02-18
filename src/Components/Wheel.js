import { useState } from 'react';

import ButtonPrimary from './Buttons/ButtonPrimary';
import Modal from './Modal';
import TextArea from "./TextArea";

const Wheel = (props) => {
  let [isOpen, setIsOpen] = useState(false);
  let [drawnName, setDrawnName] = useState();

  const getNames = () => {
    let rawList = props.wheelData.split("\n");
    let cleanedList = []
    rawList.forEach((item) => {
      if (item !== ''){
        let cleanedItem = item.replace(/\s+$/, "")
        cleanedList.push(cleanedItem);
      }
    });
    let drawnName = cleanedList[Math.floor(Math.random()*cleanedList.length)];
    setDrawnName(drawnName);
    setIsOpen(true);
    if (props.removeName && cleanedList.indexOf(drawnName) >= 0){
      cleanedList = cleanedList.filter(e => e !== drawnName);
      props.handleChange(cleanedList.join("\n"))
    }
  }

  return(
    <>
      <div className='flex justify-center flex-col'>
        <label
          htmlFor="wheelOutput" 
          className="form-label inline-block mb-2"
        >
        </label>
        <TextArea
          value={props.wheelData}
          rows={'10'}
          id={'wheelOutput'}
          readOnly={true}
        />
        <ButtonPrimary 
          value={'Choose a Name'}
          onClick={getNames}
          disabled={!props.wheelData}
          tooltip={"Names can't be empty"}
          divClass={'my-5'}
        />
      </div>
      <Modal 
        isOpen={isOpen}
        title={props.modalTitle}
        body={drawnName}
        onClose={(isClose) => setIsOpen(isClose)}
      />
    </>
  );
};

export default Wheel;