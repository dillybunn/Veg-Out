import React from "react";
import {Link} from "react-router-dom";

function MenuItemCard({ image, name, price, id }) {
  return (
    <li className="card">
      <h4>{name}</h4>
      <img src={image} alt={name} />
      <p>Price: ${price}</p>
      <Link to={`/reviews/${id}`}>Read Reviews</Link>
      {/* use special link component from react INSTEAD of a button. Include ID*/}
      <button>Write a Review</button>
    </li>
  );
}

export default MenuItemCard;