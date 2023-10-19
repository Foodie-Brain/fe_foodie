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
    $dairy: String
    $gluten: String
    $halal: String
    $kosher: String
    $nutFree: String
    $vegan: String
    $vegetarian: String
  ) {
    createReview(
      input: {
        name: $name
        photo: $photo
        description: $description
        lat: $lat
        lng: $lng
        dairy: $dairy
        gluten: $gluten
        halal: $halal
        kosher: $kosher
        nutFree: $nutFree
        vegan: $vegan
        vegetarian: $vegetarian
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
  const lat = "1234";
  const lng = "0987";
  const [dairy, setDairy] = useState("");
  const [glutenFree, setGluten] = useState("");
  const [halal, setHalal] = useState("");
  const [kosher, setKosher] = useState("");
  const [nutFree, setNut] = useState("");
  const [vegan, setVegan] = useState("");
  const [vegetarian, setVegetarian] = useState("");

  const handlePhotoChange = (event) => {
    // const selectedFile = event.target.files[0];
    setPhoto(event.target.value);
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
          dairy,
          glutenFree,
          halal,
          kosher,
          nutFree,
          vegan,
          vegetarian,
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
      <div className="checkboxes">
        <input
          type="checkbox"
          checked={dairy === "Dairy Free"}
          onChange={() => setDairy("Dairy Free")}
          value="dairy free"
          id="dairyFree"
          name="Dairy Free"
        />
        <label htmlFor="Dairy Free">Dairy Free</label>
        <input
          type="checkbox"
          checked={glutenFree === "Gluten Free"}
          onChange={() => setGluten("Gluten Free")}
          value="gluten free"
          id="glutenFree"
          name="Gluten Free"
        />
        <label htmlFor="Gluten Free">Gluten Free</label>
        <input
          type="checkbox"
          checked={halal === "Halal"}
          onChange={() => setHalal("Halal")}
          value="halal"
          id="halal"
          name="halal"
        />
        <label htmlFor="Halal">Halal</label>
        <input
          type="checkbox"
          checked={kosher === "Kosher"}
          onChange={() => setKosher("Kosher")}
          value="kosher"
          id="kosher"
          name="Kosher"
        />
        <label htmlFor="Kosher">Kosher</label>
        <input
          type="checkbox"
          checked={nutFree === "Nut Free"}
          onChange={() => setNut("Nut Free")}
          value="nut free"
          id="nutFree"
          name="Nut Free"
        />
        <label htmlFor="Nut Free">Nut Free</label>
        <input
          type="checkbox"
          checked={vegan === "Vegan"}
          onChange={() => setVegan("Vegan")}
          value="vegan"
          id="vegan"
          name="Vegan"
        />
        <label htmlFor="Vegan">Vegan</label>
        <input
          type="checkbox"
          checked={vegetarian === "Vegetarian"}
          onChange={() => setVegetarian("Vegetarian")}
          value="vegetarian"
          id="vegetarian"
          name="Vegetarian"
        />
        <label htmlFor="Vegetarian">Vegetarian</label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
