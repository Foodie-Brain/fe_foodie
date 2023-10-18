import './App.css';
import Map from '../Map/Map';
import Form from '../Form/Form';
import Review from '../Review/Review';
import { useQuery, gql } from '@apollo/client';

const App = () => {
const GET_REVIEWS = gql`
  query {
    reviews {
      id
      name
      description
      lat
      lon
    }
  }
`;
const { loading, error, data } = useQuery(GET_REVIEWS);
if (loading) return <p>Loading...</p>;
if (error) return <p>Error : {error.message}</p>;
console.log('this is data', data)

  return (
    <div className='app'>
      <Form />
      <Map />
      <Review data={data}/>
    </div>
  );
};

export default App;