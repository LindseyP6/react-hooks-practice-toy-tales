import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDelete}) {

  const toyDisplay = toys.map((toy) => 
    <ToyCard
      key={toy.id}
      id={toy.id}
      name={toy.name}
      img={toy.image}
      likes={toy.likes}
      handleDelete={handleDelete}
    />)

  return (
    <div id="toy-collection">{toyDisplay}</div>
  );
}

export default ToyContainer;
