import React from 'react';
import ReviewForm from './review-form';
import ReviewList from './review-list';

/* Movie component props */ 
const Movie = ({ id, title, img, year, synopsis, director, starring, rating, reviews, onRatingChange, onReviewSubmit }) => {
  /* create a new review object with id and text */
    const handleReviewSubmit = (review, reviewText) => {
      const newReview = {
        id: reviews.length,
        text: review
      };
      onReviewSubmit(newReview, reviewText);
    };
  return (
    <div className="card-group movie-list">
      <div className="card" style={{ width: '20rem' }}>
        <img className="card-img-top" src={img} alt="Movie poster" />
        <div className="card-body">
          <h3 className="card-title">
            <span className="movie-title">{title}</span>, {year}{' '}
          </h3>
          <h4>About the movie</h4>
          <p className="card-text">{synopsis}</p>
          <p>
            <span className="movie-director">Directed by: </span>
            {director}
          </p>
          <p>
            <span className="movie-starring">Starring: </span>
            {starring}
          </p>

          
      <ReviewList reviews={reviews} />
      <ReviewForm onReviewSubmit={handleReviewSubmit} movieId={id} />

          {/* display existing reviews */}
          {reviews.map((review, index) => (
            <div key={index}>{review}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
