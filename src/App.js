import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

import Api from './utils/ApiCall';
import TrackPage from './TrackPage';
import TrackGrid from './TrackGrid';

const styles = {
  app: {
    textAlign: 'left',
    backgroundColor: '#eee',
    height: '100%',
    minHeight: '100vh',
    paddingBottom: 60,
  },
  header: {
    backgroundColor: '#444',
    padding: 20,
    color: '#fff',
  },
}

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: [],
      showError: false,
    };
  }

  componentDidMount() {
    let self = this;
    Api.requestPost().then(function(data) {
      if (data.response) {
        self.setState({content: data.response});
      } else {
        self.setState({showError: true});
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app" style={styles.app}>
          <div className="app-header" style={styles.header}>
            <h2>Rock Tracks</h2>
          </div>
            <Switch>
              <Route exact path='/' render={() => (
                  <TrackGrid content={this.state.content} apiError={this.state.showError} />
              )}/>
              <Route path='/tracks/:trackId' render={props => (
                  <TrackPage {...props} tracks={this.state.content} />
              )}/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
