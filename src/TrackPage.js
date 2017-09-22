import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RandomTracks from './RandomTracks';
import BackButton from './components/BackButton';
import TrackView from './components/TrackView';

export default class TrackPage extends Component {

    static propTypes = {
        tracks: PropTypes.array,
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6 col-lg-8">
                        <TrackView
                          tracks={this.props.tracks}
                          selectedTrack={this.props.match.params.trackId}
                        />
                        <div className="col-xs-12 col-md-8 col-lg-6" style={{ padding: 0 }}>
                            <BackButton />
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-4">
                        <RandomTracks content={this.props.tracks} />
                    </div>
                </div>
            </div>
        )
    }

}
