import { Link } from "react-router-dom";
import "./Upload.css";
const Upload = () => {
  return (
    <div id="upload" className="upload">
      <div className="upload-form">
        <form className="form">
          <span className="form-title">Upload your file</span>
          <p className="form-paragraph">File should be an audio or video</p>
          <label htmlFor="file-input" className="drop-container">
            <span className="drop-title">Drop files here</span>
            or
            <input required type="file" accept="video/*" id="file-input" />
          </label>
          <div className="checklist">
            <div className="checklist-content">
              <input checked value="1" name="r" type="checkbox" id="01" />
              <label>Summary</label>
            </div>
            <div className="checklist-content">
              <input value="2" name="r" type="checkbox" id="02" />
              <label>Include Diarization</label>
            </div>
            <div className="checklist-content">
              <input value="3" name="r" type="checkbox" id="03" />
              <label>Calculate Engagement Metrics</label>
            </div>
            <div className="checklist-content">
              <input value="4" name="r" type="checkbox" id="04" />
              <label>To-Do List</label>
            </div>
          </div>

          <Link to={"/result"} style={{ textDecoration: "none" }}>
            <button className="upload-btn">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Upload</span>
            </button>
          </Link>
        </form>
      </div>
      <div className="upload-text">
        <h2>Revolutionize your Meetings</h2>
        <p>
          Upload your meeting, and watch as we transform it into clear summaries
          and deep insights—understanding made effortless.
        </p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default Upload;
