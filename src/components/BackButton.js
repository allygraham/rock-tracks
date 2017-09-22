import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BackButton extends Component {
    render() {
        return (
            <div className="track-page__back-button">
                <Link to={`/`} style={{ textDecoration: 'none' }}>
                    <button type="button" className="btn btn-primary btn-block btn-lg" style={{ marginTop: 20 }}><i className="glyphicon glyphicon-chevron-left"></i> Back to List</button>
                </Link>
            </div>
        );
    }
}