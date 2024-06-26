import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "./NavBar";

function ReviewForm() {
  const params = useParams();
  const id = params.id;

  const [thankYou, setThankYou] = useState("");
  const [menuItem, setMenuItem] = useState({});
  const [newReview, setNewReview] = useState({
    reviewContent: "",
    reviewer: "",
    menuItemId: id,
  });

  function handleChange(e) {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.reviewContent == "") {
      console.log("empty review - cannot post to db.json");
    } else {
      fetch(`http://localhost:6001/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "Application/JSON",
        },
        body: JSON.stringify(newReview),
      })
        .then((r) => r.json())
        .then(() => {
          setNewReview({
            reviewContent: "",
            reviewer: "",
            menuItemId: id,
          });
          setThankYou("Thank you for posting a new review!")
        });
    }
  };

  useEffect(() => {
    fetch(`http://localhost:6001/menuItems/${id}?_embed=reviews`)
      .then((r) => r.json())
      .then((data) => {
        setMenuItem(data);
      });
  }, []);

  return (
    <section>
      <NavBar />
      <h1>Review: {menuItem.menuItem}</h1>
      <img src={menuItem.image} alt={menuItem.menuItem} />
      <form onSubmit={handleSubmit}>
        <label>
          Review:
          <input
            name="reviewContent"
            value={newReview.reviewContent}
            onChange={handleChange}
          />
        </label>
        <label>
          Your Name:
          <input
            name="reviewer"
            value={newReview.reviewer}
            onChange={handleChange}
          />
        </label>
        <button type="submit"> Submit Review</button>
      </form>
      <p>{thankYou}</p>
      <Link to={`/reviews/${id}`} className="button-link">
        Go to Reviews
      </Link>
    </section>
  );
}

export default ReviewForm;
