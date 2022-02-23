const ButtonUpload = (props) => {

  const showFile = (e) => {
    let file = e.target.files[0];
    if (file.type === "text/csv" || file.type === "text/plain"){
      let reader = new FileReader();
      reader.onload = async (e) => {
        let content = e.target.result;
        props.onUpload(content);
      }
      reader.readAsText(file);
    } else {
      alert("Only plain text (.txt) and comma-separated-value (.csv) files are allowed.");
    }
  }

  return (
    <form className={`relative group`}>
      <label className="block">
        <input
          className="block file:bg-slate-500 file:hover:bg-slate-600 file:focus:outline-none file:active:bg-slate-700 w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:text-white file:cursor-pointer"
          type="file"
          id={props.id}
          name={props.name}
          onChange={(e) => showFile(e)}
        />
        <small className="mt-2 text-slate-500">
          Files (.txt/.csv) uploaded are not stored online.
        </small>
      </label>
    </form>
  );
}
 
export default ButtonUpload;