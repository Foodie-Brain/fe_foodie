import errorPic from "../.././images/error.png";
import PropTypes from 'prop-types';

const Error = ({ error }) => {
   return (
    <div className={`error-container ${error ? 'error-active' : 'error-inactive'}`}>
      <img src={errorPic} className="error-pic" alt="error message"></img>
      <p className="error-message">{error.message}</p>
    </div>
  );
};

export default Error;

Error.propTypes = {
  error: PropTypes.object.isRequired
};