import React, { useState } from 'react';

export default function ReviewForm(props) {
  const { onReviewSubmit, movieId } = props;

  const [username, setUsername] = useState('');
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const review = {
      username,
      rating: parseInt(rating),
      comment,
      date: new Date().toISOString()
    };
    onReviewSubmit(review, movieId);
    setUsername('');
    setRating(1);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="rating">Rating:</label>
        <select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="comment">Comment:</label><br></br>
        <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary">Submit Review</button>
    </form>
  );
}
