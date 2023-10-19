import "./Form.css";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const POST_REVIEW = gql`
mutation CreateReview(
$name: String!
$photo: String!
$description: String!
$lat: String!
$lon: String!
) {
createReview(
input: {
name: $name
photo: $photo
description: $description
lat: $lat
lon: $lon
}
) {
id
photo
name
description
lat
lon
}
}
`;

const Form = () => {
  const [postReview, { data, loading, error }] = useMutation(POST_REVIEW);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [lat, setLat] = useState("3456786");
  const [lon, setLon] = useState("47856");

  const graphqlEndpoint =
    "https://be-foodie-brain-b49c609f52cc.herokuapp.com/graphql";

  const handlePhotoChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(event.target.files, "this is event target files");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };



  // const submitForm = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch(graphqlEndpoint, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ query: mutation, variables }),
  //     });
  //     if (!response.ok) {
  //       throw new Error("Network response failed :(");
  //     }
  //     const data = await response.json();
  //     console.log(
  //       "submitForm is doing something and this is data response",
  //       data
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
