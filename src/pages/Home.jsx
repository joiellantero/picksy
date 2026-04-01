import { useAtom, useAtomValue } from 'jotai';
import { namesListState, removeState } from '../shared/globalState';

import Wheel from '../components/Wheel';
import List from '../components/List';
import WinnerMessage from '../components/WinnerMessage';
import Toggle from '../components/Toggle';

const Home = () => {
  const shouldRemoveName = useAtomValue(removeState);
  const [namesList, setNamesList] = useAtom(namesListState);
  const resetNamesList = () => setNamesList([]);
  const [shouldRemoveNameState, setShouldRemoveName] = useAtom(removeState);

  return (
    <div className='flex flex-col md:flex-row items-stretch md:items-start justify-center w-full max-w-5xl gap-8 px-0 md:px-6 py-4 md:py-8'>

      {/* Wheel column */}
      <div className='flex-1 min-w-0 w-full flex'>
        <Wheel removeName={shouldRemoveName} />
      </div>

      {/* Settings panel — visible at md+ (same breakpoint MobileNav hides) */}
      <aside className='hidden md:flex flex-col gap-5 md:w-56 lg:w-72 flex-shrink-0 pt-4 md:pt-12'>
        {/* Header */}
        <div className='flex items-center gap-2'>
          <div className='w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-sm flex-shrink-0'>
            <svg className='w-3.5 h-3.5 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
            </svg>
          </div>
          <h2 className='text-sm font-semibold text-gray-900 dark:text-white'>Settings</h2>
        </div>

        {/* Participants */}
        <section className='flex flex-col gap-1.5'>
          <p className='section-label'>Participants</p>
          <List
            value={namesList}
            onChange={(e) => setNamesList(e)}
            onClear={() => resetNamesList()}
          />
        </section>

        <div className='border-t border-gray-100 dark:border-gray-800/50' />

        {/* Customization */}
        <section className='flex flex-col gap-1.5'>
          <p className='section-label'>Customization</p>
          <WinnerMessage />
        </section>

        <div className='border-t border-gray-100 dark:border-gray-800/50' />

        {/* Behavior */}
        <section className='flex flex-col gap-2.5'>
          <p className='section-label'>Behavior</p>
          <Toggle
            isOn={shouldRemoveNameState}
            handleToggle={() => setShouldRemoveName(!shouldRemoveNameState)}
            label='Remove after chosen'
            hiddenMobile={false}
          />
        </section>
      </aside>
    </div>
  );
};

export default Home;
