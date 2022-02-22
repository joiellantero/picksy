import {useRecoilState, useRecoilValue, useResetRecoilState} from "recoil";
import {namesListState, removeState, settingsSideBarState} from "../shared/globalState";

import List from "./List";
import Toggle from "./Toggle";
import WinnerMessage from "./WinnerMessage";

const SettingsSideBar = () => {
  const [shouldRemoveName, setShouldRemoveName] = useRecoilState(removeState);
  const isSettingsSideBarOpen = useRecoilValue(settingsSideBarState);
  const [namesList, setNamesList] = useRecoilState(namesListState);
  const resetNamesList = useResetRecoilState(namesListState);

  return(
    <div className={`min-h-screen bg-slate-100 dark:bg-slate-700/70 p-10 absolute right-0 transform transition w-[320px] ${isSettingsSideBarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0' } duration-200 ease-in-out flex flex-col items-center`}
    >
      <h2 className={'text-lg mb-8'}>Settings</h2>
      <div className="flex flex-col justify-center gap-5">
        <List
          id={'listInput'}
          label={'Enter Names'}
          value={namesList}
          onChange={(e) => setNamesList(e)}
          onClear={() => resetNamesList()}
        />
        <hr/>
        <WinnerMessage/>
        <hr/>
        <Toggle
          isOn={shouldRemoveName}
          handleToggle={() => setShouldRemoveName(!shouldRemoveName)}
        />
      </div>
    </div>
  )
}

export default SettingsSideBar;