import './App.css';
import Map from '../Map/Map';
import Form from '../Form/Form';
import Review from '../Review/Review';

const App = () => {
  return (
    <div className='app'>
      <Form />
      <Map />
      <Review />
    </div>
  );
};

export default App;