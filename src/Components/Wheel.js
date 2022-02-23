import { useState } from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import {namesListState, winnerMessageState} from "../shared/globalState";

import ButtonPrimary from './Buttons/ButtonPrimary';
import Modal from './Modals/Modal';
import TextArea from "./Input/TextArea";


const Wheel = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [drawnName, setDrawnName] = useState();
  const winnerMessageValue = useRecoilValue(winnerMessageState);
  const [namesList, setNamesList] = useRecoilState(namesListState);

  const getNames = () => {
    let rawList = namesList.split("\n");
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
      setNamesList(cleanedList.join("\n"))
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
          value={namesList}
          rows={'10'}
          id={'wheelOutput'}
          readOnly={true}
          placeholder={'Add your list of names in settings'}
        />
        <ButtonPrimary 
          value={'Choose a name'}
          onClick={getNames}
          disabled={namesList.length === 0}
          tooltip={"Names can't be empty"}
          divClass={'my-5'}
        />
      </div>
      <Modal 
        isOpen={isOpen}
        title={winnerMessageValue}
        body={drawnName}
        onClose={(isClose) => setIsOpen(isClose)}
      />
    </>
  );
};

export default Wheel;