import React from 'react';
import Movie from './movie';

// Parent component to manage the state of the movie object and pass the state down to the Movie child component as props
export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        // state with an array ov movies and properties
        this.state = {
            movies: [
                {
                    id: 0,
                    title: `Magic Mike's Last Dance`,
                    img: `https://cdn.shopify.com/s/files/1/0057/3728/3618/products/magic-mikes-last-dance_i7iaw0tk_480x.progressive.jpg?v=1675889581`,
                    year: 2023,
                    synopsis: `Mike takes to the stage again, following a business deal that went bust, leaving him broke and taking bartender gigs in Florida. Mike heads to London with a wealthy socialite who lures him with an offer he can't refuse.`,
                    director: `Steven Soderbergh`,
                    starring: `Channing Tatum, Salma Hayek, Gavin Spokes, Caitlin Gerard`,
                    rating: 5,
                    reviews: [] 
                },
                {
                    id: 1,
                    title: `Ant-Man and the Wasp: Quantumania`,
                    img: `https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ant-man-and-the-wasp-quantumania_vjwwvg7f_480x.progressive.jpg?v=1676482725`,
                    year: 2023,
                    synopsis: `Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they interact with strange creatures and embark on an adventure that goes beyond the limits of what they thought was possible.`,
                    director: `Peyton Reed`,
                    starring: `Paul Rudd, Evangeline Lilly, Michael Douglas, Michelle Pfeiffer, Jonathan Majors, Bill Murray`,
                    rating: 4,
                    reviews: []
                }, 
                {
                    id: 2,           
                    title: `Creed 3`,
                    img:`https://cdn.shopify.com/s/files/1/0057/3728/3618/products/creed_iii_ver4_480x.progressive.jpg?v=1676400309`,
                    year: 2023,
                    synopsis: `Adonis has been thriving in both his career and family life, but when a childhood friend and former boxing prodigy resurfaces, the face-off is more than just a fight.`,
                    director: `Michael B. Jordan`,
                    starring: `Michael B. Jordan, Tessa Thompson, Jonathan Majors, Phylicia Rashad`,
                    rating: 3,
                    reviews: []
                }
            ],
            id: props.id,
            title: props.title,
            img: props.img,
            year: props.year,
            synopsis: props.synopsis,
            director: props.director,
            starring: props.starring,
            rating: props.rating
        }
    }

    // callback function updates the rating value
    handleRatingChange = (movieId, rating) => {
        this.setState(prevState => ({
            movies: prevState.movies.map(movie => {
                if (movie.id === movieId) {
                    return { ...movie, rating };
                }
                return movie;
            })
        }));
    }

    // callback function updates the review
    handleReviewSubmit = (movieId, reviewText) => {
  this.setState(prevState => ({
    movies: prevState.movies.map(movie => {
      if (movie.id === movieId) {
        return { ...movie, reviews: [...movie.reviews, { id: movie.reviews.length, text: reviewText }] };
      }
      return movie;
    })
  }));
}

    

    render() {
        /* map through the array of movie objects, passing each object as props to the movie component */
        const { movies } = this.state;
        return (
            <div>
            <h2>All Movies</h2>
            <div className="movie-list-container">
                {movies.map(movie => (
                    <Movie key={movie.id} {...movie} onRatingChange={(rating) => this.handleRatingChange(movie.id, rating)} onReviewSubmit={(review) => this.handleReviewSubmit(movie.id, review)} />
                ))}
            </div>
            </div>
        );
    }
}