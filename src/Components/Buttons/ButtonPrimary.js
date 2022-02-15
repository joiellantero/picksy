const ButtonPrimary = (props) => {
  return (
    <button
      className="py-2 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white focus:outline-none rounded"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
 
export default ButtonPrimary;