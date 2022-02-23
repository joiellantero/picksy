import SettingsIconSolid from "../../assets/icons/SettingsIconSolid";
import SettingsIconAlt from "../../assets/icons/SettingsIconAlt";
import {settingsSideBarState} from "../../shared/globalState";
import {useRecoilValue} from "recoil";

const ButtonSettings = (props) => {
  const settingSideBarState = useRecoilValue(settingsSideBarState)

  return (
    <>
      <button
        className="focus:outline-none rounded disabled:opacity-75 disabled:hover:bg-blue-600"
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {settingSideBarState ? <SettingsIconSolid/> : <SettingsIconAlt/>}
      </button>
    </>
  );
}

export default ButtonSettings;