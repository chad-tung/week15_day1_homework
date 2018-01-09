import React from 'react';
// import Movie from './Movie';
import MovieList from './MovieList';

class MovieBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, title: "Sausage Party", showtimes: ['12:00', '13:50', '14:20', '16:40', '18:00']},
        {id: 2, title: "Cafe Society", showtimes: ['10:00', '11:00', '14:25', '18:15']},
        {id: 3, title: "Morgan", showtimes: ['13:25', '15:45', '19:00']},
        {id: 4, title: "The 9th Life of Louis Drax", showtimes: ['11.25', '14.00', '17:10', '20:00']}
      ]
    }
    this.renderAll = this.renderAll.bind(this);
  }

  renderAll() {
    var movie1 = {id: 5, title: "Naam Hai Akira", showtimes: ['20:00']};
    var movie2 = {id: 6, title: "Equity", showtimes: ['16:00', '18:00', '19:45']};
    var movie3 = {id: 7, title: "Things to Come", showtimes: ['13:00', '14:25', '15:50', '17:00', '18:15', '20.00']}

    var additionalMovies = [movie1, movie2, movie3]
    const newMovieList = this.state.data.concat(additionalMovies);
    this.setState(prevState => {
      return {data: newMovieList}
    })
  }

  render() {
    return (
      <div className="movie-box">
        {/* <MovieList data={this.state.data.slice(0, 4)}/> */}
        <MovieList data={this.state.data}/>
        <button onClick={this.renderAll}>See more opening this week</button>
      </div>
    )
  }
}

export default MovieBox;
