import {useState, useCallback, useRef, useEffect} from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import {namesListState, winnerMessageState} from "../shared/globalState";

import ButtonPrimary from './Buttons/ButtonPrimary';
import Modal from './Modals/Modal';
import TextArea from "./Input/TextArea";

import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  zIndex: 10,
  top: 0,
  left: 0,
};

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

  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
    refAnimationInstance.current({
      ...opts,
      origin: { y: 0.7 },
      particleCount: Math.floor(200 * particleRatio)
    });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55
    });

    makeShot(0.2, {
      spread: 60
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45
    });
  }, [makeShot]);

  useEffect(()=>{
    if (isOpen){
      fire();
    }
  })

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
      <ReactCanvasConfetti
        refConfetti={getInstance}
        style={canvasStyles}
      />
    </>
  );
};

export default Wheel;