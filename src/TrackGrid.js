import React, { Component } from 'react';

class TrackGrid extends Component {

    propTypes = {
        content: React.PropTypes.array,
    };

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps);
    }

    render() {
        return (
            <div>
                {console.log(this.props.content)}
                {this.props.content.map((item, index) => (
                    <div className="track" key={index}>
                        <p>{item.artistName}</p>
                        <p>{item.trackName}</p>
                        <p>{item.collectionName}</p>
                        <p>&pound;{item.trackPrice}</p>
                        <img src={item.artworkUrl100} alt={item.artistName + " - " + item.collectionName} />
                    </div>
                ))
                }
            </div>
        )
    }
}

export default TrackGrid;