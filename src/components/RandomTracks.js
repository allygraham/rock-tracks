import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TrackItem from './TrackItem';
import TrackMethods from '../utils/TrackMethods';

export default class RandomTracks extends Component {

    static propTypes = {
        content: PropTypes.array,
    };

    render() {
        const randomTracks = TrackMethods.randomiseTracks(this.props.content.slice(0)); 
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
