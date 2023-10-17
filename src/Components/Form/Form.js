import './Form.css'
import { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    photo: '',
    name: '',
    description: ''
  })
  
  const { photo, name, description } = formData
  
  const graphqlEndpoint = 'https://be-foodie-brain-b49c609f52cc.herokuapp.com/graphql';
  
  const handlePhotoChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(event.target.files, 'this is event target files')
    setFormData({ ...formData, photo: selectedFile })
  }
  
  const handleNameChange = (event) => {
    setFormData({ ...formData, name: event.target.value })
  }
  
  const handleDescriptionChange = (event => {
    setFormData({ ...formData, description: event.target.value })
  })
  
  const submitForm = async (event) => {
    event.preventDefault()
    const query = `
    {
      reviews {
        name
        description
        lat
        lon
      }
    }`;
    
    console.log(query, 'heres the query obj')

    try {
      const response = await fetch(graphqlEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({ query }),
      })
      if (!response.ok) {
        throw new Error('Network response failed!');
      }
      const data = await response.json()
      console.log('the mutation worked', data)
      
    } catch (error) {
      console.log(error)
    }
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
}


export default Form