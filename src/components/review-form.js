import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { movieId, onReviewSubmit } = this.props;
    const { review } = this.state;
    onReviewSubmit(movieId, review);
    this.setState({ review: '' });
  };

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ review: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      </form>
    );
  }
}

export default ReviewForm;
