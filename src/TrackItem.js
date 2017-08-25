import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

class TrackItem extends Component {

    static propTypes = {
        item: React.PropTypes.array,
    };

    render() {
        return (
           <div className="track" style={styles.track}>
                <div className="track__image" style={styles.image}>
                    <img src={this.props.item.artworkUrl100} alt={this.props.item.artistName + " - " + this.props.item.collectionName} className="img-responsive" />
                </div>
                <div className="track__details" style={styles.details}>
                    <p>{this.props.item.trackName}</p>
                    <p>{this.props.item.artistName}</p>
                    <p>&pound;{this.props.item.trackPrice}</p>
                    <Link to={`/tracks/${this.props.item.trackId}`} style={{ textDecoration: 'none' }}>
                        <button type="button" className="btn btn-default btn-block">View Track <i className="glyphicon glyphicon-chevron-right"></i></button>
                    </Link>
                </div>
            </div> 
        )
    }
}

export default TrackItem;