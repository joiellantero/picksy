import React from 'react';
import Wheel from '../../Components/Wheel';
import List from  '../../Components/List';

const Home = () => {
  return(
    <div className='flex justify-center gap-12'>
      <Wheel/>
      <List/>
    </div>
  );
};

export default Home;