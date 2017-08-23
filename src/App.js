import React, { Component } from 'react';

import Api from './ApiCall';
import TrackGrid from './TrackGrid';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: [],
    };
  }

  componentDidMount() {
    Api.requestPost().then(data => {
      this.setState({content: data.response});
      console.log(this.state.content); 
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Rock Tracks</h2>
        </div>
          <TrackGrid content={this.state.content} />
      </div>
    );
  }
}

export default App;
