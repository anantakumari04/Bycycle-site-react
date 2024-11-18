import React, { useState } from "react";
// Import images from the local gallery

const ReviewPage = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Abhilasha Gupta",
      review: "I bought tricycle for my little sister. Quality was quite good",
      rating: 4.5,
      img: "/src/assets/img/d1.jpg"
    },
    {
        id: 2,
        name: "Abhishek Kumar",
        review: "Amazing service! Must visit..",
        rating: 5.0,
        img: "/src/assets/img/b3.jpg"
      },
      {
        id: 3,
        name: "Abhinav Sharma",
        review: "Service was good also owner was very polite and friendly",
        rating: 3.8,
        img: "/src/assets/img/b2.jpg"
      },
      {
        id: 4,
        name: "Mahek Agarwal",
        review: "My experience was not quite good because on delivery product was broken",
        rating: 3.0,
        img: "/src/assets/img/m1.jpg"
      },
      {
        id: 5,
        name: "Chelshiya Gautam",
        review: "I bought cycle for myself and amazing service provided by the owner and staff members",
        rating: 4.0,
        img: "/src/assets/img/cg.jpg"
      },
   
  ]);

  return (
    <div style={styles.container}>
      <div style={styles.reviewList}>
        {reviews.map((review) => (
          <div key={review.id} style={styles.reviewCard}>
            <div style={styles.cardHeader}>
              <img
                src={review.img}
                alt={`${review.name}'s photo`}
                style={styles.img}
              />
              <div>
                <h3>{review.name}</h3>
                <p>Rating: ⭐{review.rating}</p>
              </div>
            </div>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "20px", fontFamily: "Arial, sans-serif" },
  reviewList: { marginTop: "20px" },
  reviewCard: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px 0",
    backgroundColor: "#f9f9f9",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  img: {
    width: "100px",
    height: "120px",
    borderRadius: "45%",
    marginRight: "10px",
  },
};

export default ReviewPage;
