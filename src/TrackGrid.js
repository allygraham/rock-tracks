import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TrackItem from './components/TrackItem';

export default class TrackGrid extends Component {

    static propTypes = {
        content: PropTypes.array,
        apiError: PropTypes.bool,
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.apiError &&
                        <div className="col-xs-12">
                            <h2>We've had an issue getting the track data</h2>
                            <p>Please try again later</p>
                        </div> 
                    }
                    {this.props.content.map((item, index) => (
                        <div className="col-xs-12 col-sm-6 col-lg-4" key={index}>
                            <TrackItem item={item} />
                        </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
