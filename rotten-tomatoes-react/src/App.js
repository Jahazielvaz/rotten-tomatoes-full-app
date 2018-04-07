import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
          users: [],
          movies: []
          }
  componentDidMount(){
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }

  // componentDidMount(){
  //   fetch('/movies')
  //     .then(res => res.json())
  //     .then(movies => this.setState({movies}))
  // }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key = {user.id}>{user.username}</div>
        )}

        {this.state.movies.map(movie =>
          <div key = {movie.id}>{movie.title}</div>
        )}
      </div>
    );
  }
}

export default App;
