import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Image extends Component {
    static propTypes = {
        artwork: PropTypes.string,
        collectionName: PropTypes.string,
        artistName: PropTypes.string,
    };

    render() {
        return (
            <img src={this.props.artwork} alt={this.props.artistName + " - " + this.props.collectionName} className="img-responsive" />
        )
    }
}