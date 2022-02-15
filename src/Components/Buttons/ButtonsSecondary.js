// TODO create secondary button

const ButtonSecondary = (props) => {
  return (
    <button
      className="flex justify-center items-center py-2 px-4 bg-slate-600 hover:bg-slate-700 active:bg-slate-800 text-white focus:outline-none rounded"
      onClick={props.onClick}
    >
      <span className='mr-3'>
        {props.icon}
      </span>
      {props.value}
    </button>
  );
}
 
export default ButtonSecondary;