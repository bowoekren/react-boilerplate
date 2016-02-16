import React from 'react';
import Movie from './components/Movie';

class App extends React.Component{
  render() {
    return (
      <div>
        Hello from App Components
        <Movie />
      </div>
    );
  }
}

React.render( <App />, document.body);