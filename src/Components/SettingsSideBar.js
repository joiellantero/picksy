import { useRecoilState, useResetRecoilState } from "recoil";
import {useRemoveState, useSettingsModalState, namesListState} from "../shared/globalState";

import List from "./List";
import Input from "./Input";
import Toggle from "./Toggle";

const SettingsSideBar = () => {
  const [shouldRemoveName, setShouldRemoveName] = useRemoveState();
  const [settingsSideBarState] = useSettingsModalState();
  const [names, setName] = useRecoilState(namesListState);
  const resetList = useResetRecoilState(namesListState);

  return(
    <div className={`z-10 min-h-full bg-slate-300/50 dark:bg-slate-700/50 p-10 fixed right-0 transform transition ${settingsSideBarState ? 'translate-x-0 ' : 'translate-x-full lg:translate-x-0' } duration-200 ease-in-out flex flex-col items-center`}
    >
      <h2 className={'text-lg mb-8'}>Settings</h2>
      <div className="flex flex-col justify-center gap-5">
        <List
          value={names}
          onChange={(e) => setName(e)}
          onClear={() => resetList()}
        />
        <Input
          label={'Winner Prompt Message'}
        />
        <Toggle
          isOn={shouldRemoveName}
          handleToggle={() => setShouldRemoveName(!shouldRemoveName)}
        />
      </div>
    </div>
  )
}

export default SettingsSideBar;