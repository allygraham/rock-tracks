import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

import RandomTracks from './RandomTracks';

const styles = {
    track: {
        marginTop: 40,
        padding: 20,
        border: '2px solid #d6d6d6',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    details: {
        display: 'inline-block',
        padding: '0 20px',
        textAlign: 'left',
    },
    image: {
        display: 'inline-block',
        verticalAlign: 'top',
        position: 'relative',
    },
}

class TrackPage extends Component {

    static propTypes = {
        tracks: PropTypes.array,
    };

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps);
    }

    getTrackView() {
        return (
            this.props.tracks.filter((item) => {
            return item.trackId.toString() === this.props.match.params.trackId ? item : '';
            }).map((item, index) => (
                <div className="track" style={styles.track} key={index}>
                    <div className="track__image" style={styles.image}>
                        <img src={item.artworkUrl100} alt={item.artistName + " - " + item.collectionName} className="img-responsive" />
                    </div>
                    <div className="track__details" style={styles.details}>
                        <p><strong>{item.trackName}</strong></p>
                        <p>{item.artistName}</p>
                        <p><Moment format="m:ss">{item.trackTimeMillis}</Moment></p>
                        <p><Moment format="Do MMM YY">{item.releaseDate}</Moment></p>
                        <p>&pound;{item.trackPrice}</p>
                        <a className="btn btn-success" href={item.trackViewUrl} target="_blank">More Details <i className="glyphicon glyphicon-new-window"></i></a>
                    </div>
                </div>
            ))
        )
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-lg-7">
                        {this.getTrackView()}
                        <div className="col-xs-12 col-lg-6" style={{ padding: 0 }}>
                            <div className="track-page__back-button">
                                <Link to={`/`} style={{ textDecoration: 'none' }}>
                                    <button type="button" className="btn btn-primary btn-block btn-lg" style={{ marginTop: 20 }}><i className="glyphicon glyphicon-chevron-left"></i> Back to List</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-lg-5">
                        <RandomTracks content={this.props.tracks} />
                    </div>
                </div>
            </div>
        )
    }

}

export default TrackPage;