import errorPic from "../.././images/error.png";
 
 const Error = ({ errorMessage }) => {
  return (
    <div className="error-container">
      <img src={errorPic} className="error-pic" alt="error message"></img>
      <p className="error-message">{errorMessage}</p>
    </div>
  )
 }

 export default Error;