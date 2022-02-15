import { useState } from 'react';
import ButtonPrimary from './Buttons/ButtonPrimary';
import Modal from './Modal';

const Wheel = (props) => {
  let [isOpen, setIsOpen] = useState(false);
  let [drawnName, setDrawnName] = useState();

  const getNames = () => {
    let names = props.wheelData.split("\n");
    let name = names[Math.floor(Math.random()*names.length)];
    setDrawnName(name);
    setIsOpen(true);
  }

  return(
    <>
      <div className='flex justify-center flex-col'>
        <label 
          htmlFor="wheelOutput" 
          className="form-label inline-block mb-2"
        >
        </label>
        <textarea
          value={props.wheelData}
          readOnly
          rows="10"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 dark:text-gray-300 bg-clip-padding dark:bg-slate-800 bg-slate-100 rounded transition ease-in-out m-0 focus:outline-none"
          id="wheelOutput"
        />
        <ButtonPrimary 
          value={'Spin Wheel'} 
          onClick={getNames}
          disabled={!props.wheelData}
          tooltip={'Names cannot be empty'}
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