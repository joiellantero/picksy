import { useRemoveState } from '../shared/globalState';

import Wheel from '../components/Wheel';

const Home = () => {
  const [shouldRemoveName] = useRemoveState();

  return(
    <div className='flex flex-wrap justify-center gap-20 m-10'>
      <Wheel
          removeName={shouldRemoveName}
      />
    </div>
  );
};

export default Home;