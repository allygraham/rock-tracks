import React, { Component } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

import Image from './Image';
import TrackPrice from './TrackPrice';

const styles = {
    track: {
        marginTop: 20,
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

export default class TrackView extends Component {
    static propTypes = {
        tracks: PropTypes.array,
        selectedTrack: PropTypes.string,
    };

    showTrack = () => {
        return (
            this.props.tracks.filter((item) => {
            return item.trackId.toString() === this.props.selectedTrack ? item : '';
            }).map((item, index) => (
                <div className="track" style={styles.track} key={index}>
                    <div className="track__image" style={styles.image}>
                        <Image
                          artwork={item.artworkUrl100}
                          artistName={item.artistName}
                          collectionName={item.collectionName}
                        />
                    </div>
                    <div className="track__details" style={styles.details}>
                        <p><strong>Song: </strong>{item.trackName}</p>
                        <p><strong>Artist: </strong>{item.artistName}</p>
                        <p><strong>Track Length: </strong><Moment format="m:ss">{item.trackTimeMillis}</Moment></p>
                        <p><strong>Release Date: </strong><Moment format="Do MMM YY">{item.releaseDate}</Moment></p>
                        <p style={{ display: 'inline-block' }}><strong>Price:</strong>&nbsp;</p>
                        <TrackPrice 
                          trackPrice={item.trackPrice}
                        />
                        <p><a className="btn btn-success" href={item.trackViewUrl} target="_blank">More Details <i className="glyphicon glyphicon-new-window"></i></a></p>
                    </div>
                </div>
            ))
        )   
    }

    render() {
        return (
            <div>
                {this.showTrack()}
            </div>
        );
    }
}