import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RandomTracks from './components/RandomTracks';
import BackButton from './components/BackButton';
import TrackView from './components/TrackView';
import TrackMethods from './utils/TrackMethods';

export default class TrackPage extends Component {

    static propTypes = {
        tracks: PropTypes.array,
    };

    render() {
        const trackName = TrackMethods.trackName(this.props.tracks, this.props.match.params.trackId);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6 col-lg-8">
                        <h2 style={{ marginTop: 40 }}>{trackName}</h2>
                        <TrackView
                          tracks={this.props.tracks}
                          selectedTrack={this.props.match.params.trackId}
                        />
                        <div className="col-xs-12 col-md-8 col-lg-6" style={{ padding: 0 }}>
                            <BackButton />
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-4">
                        <h3 style={{ marginTop: 40 }}>Recommendations</h3>
                        <RandomTracks content={this.props.tracks} />
                    </div>
                </div>
            </div>
        )
    }

}
