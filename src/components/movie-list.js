import React from 'react';
import Movie from './movie';

// Parent component to manage the state of the movie object and pass the state down to the Movie child component as props
export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        // state with an array of movies and properties
        this.state = {
            movies: [
                {
                    id: 0,
                    title: `Catch Me If You Can`,
                    img: `https://m.media-amazon.com/images/M/MV5BNDQ1YmNmNDctMTZiZS00OGU3LWIyN2YtMWIwMmVhNDQ0MjY5XkEyXkFqcGdeQXVyMjQ0NzE0MQ@@._V1_.jpg`,
                    year: 2002,
                    synopsis: `Barely 21 yet, Frank is a skilled forger who has passed as a doctor, lawyer and pilot. FBI agent Carl becomes obsessed with tracking down the con man, who only revels in the pursuit.`,
                    director: `Steven Spielberg`,
                    starring: `Leonardo Dicaprio, Tom Hanks, Christopher Walken`,
                    rating: 5,
                    reviews: [] 
                },
                {
                    id: 1,
                    title: `Troy`,
                    img: `https://image.tmdb.org/t/p/w500/a07wLy4ONfpsjnBqMwhlWTJTcm.jpg`,
                    year: 2004,
                    synopsis: `An adaptation of Homer's great epic, the film follows the assault on Troy by the united Greek forces and chronicles the fates of the men involved.`,
                    director: `Wolfgang Peterson`,
                    starring: `Brad Pitt, Eric Bana, Orlando Bloom`,
                    rating: 3,
                    reviews: []
                }, 
                {
                    id: 2,           
                    title: `Gladiator`,
                    img:`https://media.npr.org/assets/img/2015/11/25/gettyimages-156473199_custom-60c5ab37668dfcb743f85117f0117e28abdd7041-s1100-c50.jpg`,
                    year: 2000,
                    synopsis: `A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.`,
                    director: `Ridley Scott`,
                    starring: `Russel Crowe, Joaquin Phoenix, Connie Nielson`,
                    rating: 5,
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