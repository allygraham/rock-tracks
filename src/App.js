import React, { Component } from 'react';

import Api from './ApiCall';
import TrackGrid from './TrackGrid';

const styles = {
  app: {
    textAlign: 'left',
  },
  header: {
    backgroundColor: '#222',
    padding: 20,
    color: '#fff',
  },
}

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
      <div className="app" style={styles.app}>
        <div className="app-header" style={styles.header}>
          <h2>Rock Tracks</h2>
        </div>
          <TrackGrid content={this.state.content} />
      </div>
    );
  }
}

export default App;
