import foodieLogo from "../.././images/foodie-brain-logo.png";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { POST_REVIEW } from "../../utils";
import PropTypes from 'prop-types';

const Form = ({ lat, lng, refetch }) => {
  const [postReview] = useMutation(POST_REVIEW);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [dairyFree, setDairy] = useState(0);
  const [glutenFree, setGluten] = useState(0);
  const [halal, setHalal] = useState(0);
  const [kosher, setKosher] = useState(0);
  const [nutFree, setNut] = useState(0);
  const [vegan, setVegan] = useState(0);
  const [vegetarian, setVegetarian] = useState(0);
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
          lng,
          dairyFree,
          glutenFree,
          halal,
          kosher,
          nutFree,
          vegan,
          vegetarian,
        },
      });
        setMutationError(false)
        setPhoto("")
        setName("");
        setDescription("");
        console.log("Mutation response data:", data);
      } catch (error) {
        setMutationError(true)
      }
  };

  return (
    <div className="form-container">
      <img src={foodieLogo} className="logo" alt='application logo'></img>
      <div className="error-container">
        {mutationError ? <p>Oops: please ensure you've selected all required fields.</p> : <p></p>}
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
        <div className="checkboxes">
        <div className="input-wrapper">
            <input
              type="checkbox"
              checked={dairyFree === 1}
              onChange={(e) => {
                setDairy(e.target.checked ? 1 : 0);
              }}
              value="dairy free"
              id="dairyFree"
              name="Dairy Free"
              />
            <label htmlFor="Dairy Free">Dairy Free</label>
          </div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              checked={glutenFree === 1}
              onChange={(e) => {
                setGluten(e.target.checked ? 1 : 0);
              }}
              value="gluten free"
              id="glutenFree"
              name="Gluten Free"
              />
            <label htmlFor="Gluten Free">Gluten Free</label>
          </div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              checked={halal === 1}
              onChange={(e) => {
                setHalal(e.target.checked ? 1 : 0);
              }}
              value="halal"
              id="halal"
              name="halal"
              />
            <label htmlFor="Halal">Halal</label>
          </div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              checked={kosher === 1}
              onChange={(e) => {
                setKosher(e.target.checked ? 1 : 0);
              }}
              value="kosher"
              id="kosher"
              name="Kosher"
            />
            <label htmlFor="Kosher">Kosher</label>
          </div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              checked={nutFree === 1}
              onChange={(e) => {
                setNut(e.target.checked ? 1 : 0);
              }}
              value="nut free"
              id="nutFree"
              name="Nut Free"
            />
            <label htmlFor="Nut Free">Nut Free</label>
          </div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              checked={vegan === 1}
              onChange={(e) => {
                setVegan(e.target.checked ? 1 : 0);
              }}
              value="vegan"
              id="vegan"
              name="Vegan"
            />
            <label htmlFor="Vegan">Vegan</label>
          </div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              checked={vegetarian === 1}
              onChange={(e) => {
                setVegetarian(e.target.checked ? 1 : 0);
              }}
              value="vegetarian"
              id="vegetarian"
              name="Vegetarian"
            />
            <label htmlFor="Vegetarian">Vegetarian</label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

Form.propTypes = {
  lat: PropTypes.object,
  lng: PropTypes.object,
  refetch: PropTypes.func.isRequired
};