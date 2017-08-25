import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
    trackName: {

    },
    image: {
        width: 100,
        height: 100,
        display: 'inline-block',
        verticalAlign: 'top',
    },
    button: {
        marginTop: 15,
    },
}

class TrackItem extends Component {

    static propTypes = {
        item: PropTypes.object,
    };

    render() {
        return (
           <div className="track thumbnail" style={styles.track}>
                <div className="track__image" style={styles.image}>
                    <img src={this.props.item.artworkUrl100} alt={this.props.item.artistName + " - " + this.props.item.collectionName} className="img-responsive" />
                </div>
                <div className="track__details caption" style={styles.details}>
                    <p style={styles.trackName}><strong>{this.props.item.trackName}</strong></p>
                    <p>{this.props.item.artistName}</p>
                    <p style={{ marginTop: 30 }}>&pound;{this.props.item.trackPrice}</p>
                </div>
                <div className="track__button" style={styles.button}>
                    <Link to={`/tracks/${this.props.item.trackId}`} style={{ textDecoration: 'none' }}>
                        <button type="button" className="btn btn-primary btn-block">View Track <i className="glyphicon glyphicon-chevron-right"></i></button>
                    </Link>
                </div>
            </div> 
        )
    }
}

export default TrackItem;