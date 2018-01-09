import React from 'react';

class Movie extends React.Component {

  constructor(props) {
    super(props);
    this.renderTime = this.renderTime.bind(this);
  }


  renderTime() {
    for (var time of this.props.showtimes) {
      return (
        {time}
      )
    }

  }

  render() {
    var times = "";
    for (var time of this.props.showtimes) {
      times += time + "     ";
    }
    console.log(times);
    return (
      <div className="movie">
        <h4>{this.props.title}</h4>
        <h6>Showtimes: {times}</h6>
      </div>
    )
  }
}

export default Movie;
