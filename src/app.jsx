import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}
