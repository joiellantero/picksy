import SettingsIcon from "../../assets/icons/SettingsIcon";

const ButtonSettings = (props) => {
  return (
    <>
      <button
        className="focus:outline-none rounded disabled:opacity-75 disabled:hover:bg-blue-600"
        onClick={props.onClick}
        disabled={props.disabled}
      >
        <SettingsIcon/>
      </button>
    </>
  );
}

export default ButtonSettings;