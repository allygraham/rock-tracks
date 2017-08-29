import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TrackItem from './TrackItem';

class RandomTracks extends Component {

    static propTypes = {
        content: PropTypes.array,
    };

    randomiseTracks = (array) => {
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
                <div key={index}>
                    <TrackItem item={item} />
                </div>
                ))     
            }
            </div>   
        )
    }
}

export default RandomTracks;
