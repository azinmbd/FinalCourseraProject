import React, { useEffect, useState } from "react";
import "../Styles/Testimonials.css";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch users from JSONPlaceholder
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Simulate testimonials from user data
        const simulatedTestimonials = data.map((user) => ({
          rating: "⭐⭐⭐⭐⭐", // Simulated rating
          name: user.name,
          text: `User ${user.name} gives us a fantastic review!`,
          image: `https://i.pravatar.cc/150?u=${user.id}`,
        }));
        setTestimonials(simulatedTestimonials);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section id="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="reviews">
          {testimonials.slice(0, 4).map((review) => (
            <article className="review" key={review.name}>
              <div className="reviewer">
                <img src={review.image} alt={review.name} />
                <span className="name">{review.name}</span>
              </div>
              <h3>{review.rating}</h3>
              <div className="review-text">{review.text}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
