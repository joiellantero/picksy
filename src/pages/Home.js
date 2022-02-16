import { useState, useEffect } from 'react';
import { useRemoveState } from '../shared/globalState';

import Wheel from '../components/Wheel';
import List from '../components/List';
import Input from '../components/Input';
import Toggle from '../components/Toggle';

const Home = () => {
  const [listData, setListData] = useState();
  const [wheelData, setWheelData] = useState();
  let [winnerMsg, setWinnerMsg] = useState('Congratulations!');
  const [shouldRemoveName, setShouldRemoveName] = useRemoveState();

  useEffect(() => {
    setWheelData(listData)
    if (winnerMsg === ''){
      setWinnerMsg('Congratulations!');
    }
  }, [listData, winnerMsg])

  return(
    <div className='flex flex-wrap justify-center gap-12 m-10'>
      <Wheel
          wheelData={wheelData}
          handleChange={(wheelData) => setWheelData(wheelData)}
          modalTitle={winnerMsg}
          removeName={shouldRemoveName}
      />
      <div className="flex flex-col gap-5">
        <List
            onChange={(listData) => setListData(listData)}
        />
        <Input
            id={winnerMsg}
            label={'Winner Prompt Message'}
            onChange={(winnerMsg) => setWinnerMsg(winnerMsg)}
        />
        <Toggle
            isOn={shouldRemoveName}
            handleToggle={() => setShouldRemoveName(!shouldRemoveName)}
        />
      </div>
    </div>
  );
};

export default Home;