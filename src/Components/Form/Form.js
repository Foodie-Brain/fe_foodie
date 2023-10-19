import "./Form.css";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const POST_REVIEW = gql`
mutation CreateReview(
$name: String!
$photo: String!
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
photo
name
description
lat
lng
}
}
`;

const Form = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [postReview] = useMutation(POST_REVIEW);
  const lat = '1234'
  const lng = '0987'
  
  
  const handlePhotoChange = (event) => {
    // const selectedFile = event.target.files[0];
    setPhoto(event.target.value)
  };
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  
  
  
  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const { data } = await postReview({
      variables: {
      name,
      photo,
      description,
      lat,
      lng,
      },
      });
      console.log("Mutation response data:", data);
      } catch (error) {
      console.error("Mutation error:", error);
      }
      };

  return (
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
  );
};

export default Form;
