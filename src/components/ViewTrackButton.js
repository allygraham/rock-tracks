import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const styles = {
    button: {
        marginTop: 15,
    },
}

export default class ViewTrackButton extends Component {
    static propTypes = {
        trackId: PropTypes.number,
    };
    render() {
        return (
            <div className="track__button" style={styles.button}>
                <Link to={`/tracks/${this.props.trackId}`} style={{ textDecoration: 'none' }}>
                    <button type="button" className="btn btn-primary btn-block">View Track <i className="glyphicon glyphicon-chevron-right"></i></button>
                </Link>
            </div>
        )
    }
}