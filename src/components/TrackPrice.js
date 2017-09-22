import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TrackPrice extends Component {
    
    static propTypes = {
        trackPrice: PropTypes.number,
    };

    render() {
        return (
            <p>&pound;{this.props.trackPrice}</p>
        )
    }
}