import errorPic from "../.././images/error.png";

const Error = ({ error }) => {
  return (
    <div className={`error-container ${error ? 'error-active' : 'error-inactive'}`}>
      <img src={errorPic} className="error-pic" alt="error message"></img>
      <p className="error-message">{error.message}</p>
    </div>
  );
};

export default Error;