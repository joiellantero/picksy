const ButtonUpload = (props) => {
  return (
    <form className={`relative group`}>
      <input
        className="block file:bg-slate-500 file:hover:bg-slate-600 file:focus:outline-none file:active:bg-slate-700 w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded file:border-0
        file:text-sm file:font-semibold
        file:text-white
         file:cursor-pointer"
        type="file"
        id={props.id}
        name={props.name}
        onClick={props.onClick}
      >
      </input>
    </form>
  );
}
 
export default ButtonUpload;