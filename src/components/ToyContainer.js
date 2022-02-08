import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDelete, handleLikes}) {

  const toyDisplay = toys.map((toy) => 
    <ToyCard
      key={toy.id}
      id={toy.id}
      name={toy.name}
      img={toy.image}
      likes={toy.likes}
      handleDelete={handleDelete}
      handleLikes={handleLikes}
    />)

  return (
    <div id="toy-collection">{toyDisplay}</div>
  );
}

export default ToyContainer;
