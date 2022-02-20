import {removeState} from '../shared/globalState';
import {useRecoilValue} from "recoil";

import Wheel from '../components/Wheel';

const Home = () => {
  const shouldRemoveName = useRecoilValue(removeState);

  return(
    <div className='flex flex-wrap justify-center gap-20 m-10'>
      <Wheel
          removeName={shouldRemoveName}
      />
    </div>
  );
};

export default Home;