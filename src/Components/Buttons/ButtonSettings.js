import SettingsIconSolid from "../../assets/icons/SettingsIconSolid";
import SettingsIconAlt from "../../assets/icons/SettingsIconAlt";
import {useSettingsModalState} from "../../shared/globalState";

const ButtonSettings = (props) => {
  const [settingSideBarState] = useSettingsModalState()

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