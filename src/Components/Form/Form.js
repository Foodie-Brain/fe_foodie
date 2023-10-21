import "./Form.css";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import foodieLogo from '../.././images/foodie-brain-logo.png'

const POST_REVIEW = gql`
  mutation CreateReview(
    $name: String!
    $photo: Upload
    $description: String!
    $lat: String!
    $lng: String!
  ) {
    createReview(
    input: {
    name: $name
    photo: $photo
    description: $description
    lat: $lat
    lng: $lng
    }
  ) {
    id
    photoUrl
    name
    description
    lat
    lng
    }
  }
`;

const Form = ({ lat, lng, refetch }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [postReview] = useMutation(POST_REVIEW);
  const [mutationError, setMutationError] = useState(false)
  
  const handlePhotoChange = (event) => {
    const selectedFile = event.target.files[0];
    setPhoto(selectedFile)
  };
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  
  const submitForm = async (event) => {
    event.preventDefault();
    refetch();
    try {
      const { data } = await postReview({
        variables: {
          name,
          photo,
          description,
          lat,
          lng
        },
      });
        console.log("Mutation response data:", data);
        setMutationError(false)
      } catch (error) {
        console.error("Mutation error:", error);
        setMutationError(true)
        console.log(mutationError, 'this is mutation error')
      }
  };

  return (
    <div className="form-container">
      <img src={foodieLogo} className="logo" alt='application logo'></img>
      <div className="error-container">
        {mutationError ? <p>Oops: please ensure you've selected all fields</p> : <p></p>}
      </div>
      <form onSubmit={submitForm} className="form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
          />
        <input
          name="description"
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
          required
          />
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handlePhotoChange}
          />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
