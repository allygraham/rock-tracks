import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TrackPrice extends Component {
    
    static propTypes = {
        trackPrice: PropTypes.number,
    };

    render() {
        return (
            <div style={{ display: 'inline-flex' }}>
                &pound;{this.props.trackPrice}
            </div>
        )
    }
}