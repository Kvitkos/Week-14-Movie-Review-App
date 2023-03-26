import React from 'react';
import ReviewForm from './review';

export default class ReviewList extends React.Component {
    /* initialize the component state with reviews passed as props or empty array if none provided*/ 
    constructor(props) {
        super(props);
        this.state = {
            reviews: props.reviews || []
        };
    }

    handleReviewSubmit = (review) => {
        this.setState(prevState => ({
            reviews: [...prevState.reviews, review]
        }));
    }

    /* map over the reviews array */
    render() {
        const { reviews } = this.state;
        return (
          <div>
            <h2>Reviews</h2>
            {reviews.map((review) => (
              <div key={review.id}>
                <p>Username: {review.username}</p>
                <p>Rating: {review.rating}</p>
                <p>Comment: {review.comment}</p>
                <p>Date: {review.date}</p>
              </div>
            ))}
               <ReviewForm onReviewSubmit={this.handleReviewSubmit} />
          </div>
        );
      }
    }
    
