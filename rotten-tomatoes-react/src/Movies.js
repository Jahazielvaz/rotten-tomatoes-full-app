import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Movies extends Component{
  state = {
    movies: []

    componentDidMount(){
      fetch('/movies')
        .then(res => res.json())
        .then(movies => this.setState({movies}))
  }


  render(){
    return(
      <div className = "movies">
        <h1>Movies</h1>
        {this.state.movies.map(movie =>
          <div key = {movie.id}>{movie.title}</div>
        )}
      </div>
    )
  }

}// End of movies component

export Movies
