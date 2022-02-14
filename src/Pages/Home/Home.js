import { useState, useEffect } from 'react';
import Wheel from '../../Components/Wheel';
import List from  '../../Components/List';

const Home = () => {
  const [listData, setListData] = useState('');
  const [wheelData, setWheelData] = useState('');

  useEffect(() => {
    setWheelData(listData)
  }, [listData])

  return(
    <div className='flex justify-center gap-12 mt-10'>
      <Wheel wheelData={wheelData}/>
      <List onChange={(listData) => setListData(listData)}/>
    </div>
  );
};

export default Home;