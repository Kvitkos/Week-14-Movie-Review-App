import React from 'react';

export default class Stars extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        rating: props.rating
      };
    }
  
    // update component state with new star rating value
    handleRatingChange = (event) => {
      const rating = parseInt(event.target.value);
      this.setState({ rating });
    }
  
    render() {
      return (
        <div>
          <form className="rating">
            <label>
              <input type="radio" name="stars" value="1" onChange={this.handleRatingChange} />
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="2" onChange={this.handleRatingChange} />
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="3" onChange={this.handleRatingChange} />
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>   
            </label>
            <label>
              <input type="radio" name="stars" value="4" onChange={this.handleRatingChange} />
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="5" onChange={this.handleRatingChange} />
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
          </form>
        </div>
      );
    }
  }