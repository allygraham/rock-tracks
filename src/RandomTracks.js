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

class RandomTracks extends Component {

    static propTypes = {
        content: React.PropTypes.array,
    };

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps);
    }

    randomiseTracks(array) {
        let i = array.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array.slice(0, 3);
    }

    render() {
        const randomTracks = this.randomiseTracks(this.props.content.slice(0)); 
        return (
            <div>
             {randomTracks.map((item, index) => (
                <div className="col-xs-12" key={index}>
                    <div className="track" style={styles.track}>
                        <div className="track__image" style={styles.image}>
                            <img src={item.artworkUrl100} alt={item.artistName + " - " + item.collectionName} className="img-responsive" />
                        </div>
                        <div className="track__details" style={styles.details}>
                            <p>{item.trackName}</p>
                            <p>{item.artistName}</p>
                            <p>&pound;{item.trackPrice}</p>
                            <Link to={`/tracks/${item.trackId}`}>
                                <button type="button" className="btn btn-default btn-block">View Track <i className="glyphicon glyphicon-chevron-right"></i></button>
                            </Link>
                        </div>
                    </div>
                </div>
                ))     
            }
            </div>   
        )
    }
}

export default RandomTracks;