import {Link} from "react-router-dom";

const FileUpload = (props) => {

  const handleUpload = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    let allowedExtensions = /(\.csv|\.txt)$/i;
    if (allowedExtensions.exec(file.name)){
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
    <div>
      <form className={`relative group`}>
        <label className="block">
          <input
            className="block file:bg-slate-500 file:hover:bg-slate-600 file:focus:outline-none file:active:bg-slate-700 w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:text-white file:cursor-pointer"
            type="file"
            accept=".txt, .csv"
            id={props.id}
            name={props.name}
            onChange={(e) => handleUpload(e)}
          />
        </label>
      </form>
      <small className="mt-2 block text-slate-500">
        Files uploaded (txt/csv) are not stored online. <Link to="/help">Learn more.</Link>
      </small>
    </div>
  );
}
 
export default FileUpload;