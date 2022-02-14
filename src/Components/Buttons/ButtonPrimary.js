const ButtonPrimary = (props) => {
  return (
    <button
      className="py-2.5 px-5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white focus:outline-none rounded"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
 
export default ButtonPrimary;