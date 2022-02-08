import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setShowToys] = useState([])

  useEffect( () => {
    fetch('http://localhost:3001/toys')
    .then((r)=>r.json())
    .then(toyArray => setShowToys(toyArray))
  }, [] )

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addedToy(submittedToy){
    setShowToys(toys => [...toys, submittedToy])
  }

  function handleStateDelete(id){
    const byebyeToy = toys.filter((toy) => toy.id !== id)
    setShowToys(byebyeToy)
  }
  
  return (
    <>
      <Header />
      {showForm ? <ToyForm addedToy={addedToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDelete={handleStateDelete}/>
    </>
  );
}

export default App;
