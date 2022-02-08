import React, {useState} from "react";

function ToyForm({addedToy}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState ("")

function handleNameChange(e){
  setName(e.target.value)
}

function handleImageChange(e){
  setImage(e.target.value)
}

function handleNewToySubmit(e){
  e.preventDefault();
  const newToy = {name: name, image: image, likes: 0}

  fetch("http://localhost:3001/toys", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newToy)
  })
    .then(r=>r.json())
    .then(submittedToy => addedToy(submittedToy))
    setName("")
    setImage("")
}

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleNewToySubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={handleImageChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
