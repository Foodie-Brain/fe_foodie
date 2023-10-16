import './Form.css'
import { useState } from 'react'

const Form = () => {
  const[formData, setFormData] = useState({
    photo: '',
    name: '',
    description: ''
  })
}

const { photo, name, description } = formData

const handlePhotoChange = (event) => {
  const selectedFile = event.target.files[0];
  setFormData({ ...formData, photo: selectedFile })
}

const handleNameChange = (event) => {
  setFormData({ ...formData, name: event.target.value })
}

const handleDescriptionChange = (event => {
  setFormData({ ...formData, description: event.target.value })
})

const submitForm = (event) => {
  event.preventDefault()
  // queries
}

return (
  <form onSubmit={submitForm}>
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={name}
      onChange={handleNameChange}
      required
    />
    <textarea
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


export default Form