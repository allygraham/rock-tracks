import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Api from './ApiCall';
import TrackGrid from './TrackGrid';
import Track from './Track';

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
      <Router>
        <div className="app" style={styles.app}>
          <div className="app-header" style={styles.header}>
            <h2>Rock Tracks</h2>
          </div>
          <Switch>
            <Route exact path='/' render={() => (
                <TrackGrid content={this.state.content} />
            )}/>
            <Route path='track/:trackId' component={Track}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
