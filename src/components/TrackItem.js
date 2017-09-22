import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import ViewTrackButton from './ViewTrackButton';
import TrackPrice from './TrackPrice';

const styles = {
    track: {
        marginTop: 40,
        padding: 20,
        border: '2px solid #d6d6d6',
        borderRadius: 5,
        backgroundColor: '#fff',
        maxWidth: 390,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    details: {
        padding: '0 0 0 20px',
        display: 'inline-block',
        verticalAlign: 'top',
        textOverflow: 'ellipsis',
        width: 200,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    image: {
        width: 100,
        height: 100,
        display: 'inline-block',
        verticalAlign: 'top',
    },
}

export default class TrackItem extends Component {

    static propTypes = {
        item: PropTypes.object,
    };

    render() {
        return (
           <div className="track thumbnail" style={styles.track}>
                <div className="track__image" style={styles.image}>
                    <Image
                        artwork={this.props.item.artworkUrl100}
                        artistName={this.props.item.artistName}
                        collectionName={this.props.item.collectionName}
                    />
                </div>
                <div className="track__details caption" style={styles.details}>
                    <p style={styles.trackName}><strong>{this.props.item.trackName}</strong></p>
                    <p>{this.props.item.artistName}</p>
                    <div style={{ marginTop: 30 }}>
                        <TrackPrice
                            trackPrice={this.props.item.trackPrice}
                        />
                    </div>
                </div>
                <ViewTrackButton
                    trackId={this.props.item.trackId}
                />
            </div> 
        )
    }
}
