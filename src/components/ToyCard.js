import React, {useState} from "react";

function ToyCard({id, name, img, likes, handleDelete, handleLikes}) {

  function handleDeleteClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    .then(r=>r.json())
    .then(() => handleDelete(id))
}

  function increaseLikes(){
    const updateObj = {
      likes: likes + 1.
    };
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateObj)
    })
    .then(r=>r.json())
    .then(handleLikes)

  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={img}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={increaseLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
