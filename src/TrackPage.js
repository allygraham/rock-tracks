import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import RandomTracks from './RandomTracks';

const styles = {
    track: {
        marginTop: 40,
        padding: 20,
        border: '2px solid #d6d6d6',
        borderRadius: 5,
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
        tracks: React.PropTypes.array,
    };

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-md-8">
                        {this.props.tracks.filter((item) => {
                            return item.trackId == this.props.match.params.trackId ? item : '';
                            }).map((item, index) => (
                                <div className="track" style={styles.track} key={index}>
                                    <div className="track__image" style={styles.image}>
                                        <img src={item.artworkUrl100} alt={item.artistName + " - " + item.collectionName} className="img-responsive" />
                                    </div>
                                    <div className="track__details" style={styles.details}>
                                        <p>{item.trackName}</p>
                                        <p>{item.artistName}</p>
                                        <p><Moment format="m:ss">{item.trackTimeMillis}</Moment></p>
                                        <p><Moment format="Do MMM YY">{item.releaseDate}</Moment></p>
                                        <p>&pound;{item.trackPrice}</p>
                                        <a className="btn btn-default" href={item.trackViewUrl} target="_blank">More Details <i className="glyphicon glyphicon-new-window"></i></a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <RandomTracks content={this.props.tracks} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4">
                        <Link to={`/`} style={{ textDecoration: 'none' }}>
                            <button type="button" className="btn btn-default btn-block"><i className="glyphicon glyphicon-chevron-left"></i> Back to List</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default TrackPage;