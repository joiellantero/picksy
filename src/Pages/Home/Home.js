import { useState, useEffect } from 'react';
import Wheel from '../../components/Wheel';
import List from  '../../components/List';
import Input from '../../components/Input';
import Toggle from '../../components/Toggle';

const Home = () => {
  const [listData, setListData] = useState();
  const [wheelData, setWheelData] = useState();
  let [winnerMsg, setWinnerMsg] = useState('Congratulations!');

  useEffect(() => {
    setWheelData(listData)
    if (winnerMsg === ''){
      setWinnerMsg('Congratulations!');
    }
  }, [listData, winnerMsg])

  return(
    <div className='flex justify-center gap-12 mt-10'>
      <Wheel wheelData={wheelData} modalTitle={winnerMsg}/>
      <div className="flex flex-col gap-5">
        <List onChange={(listData) => setListData(listData)}/>
        <Input id={winnerMsg} label={'Winner Prompt Message'} onChange={(winnerMsg) => setWinnerMsg(winnerMsg)}/>
        <Toggle />
      </div>
    </div>
  );
};

export default Home;