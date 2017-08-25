import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TrackItem from './TrackItem';

class TrackGrid extends Component {

    static propTypes = {
        content: PropTypes.array,
    };

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                   {this.props.content.map((item, index) => (
                        <div className="col-xs-12 col-sm-6 col-md-4" key={index}>
                            <TrackItem item={item} />
                        </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default TrackGrid;