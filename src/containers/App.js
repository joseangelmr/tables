/**
 * Created by joseangelmr on 19/12/16.
 */
import React, { Component, PropTypes } from 'react';

export default class App extends Component {
    static propTypes = {
        children: PropTypes.node,
    };

    render() {
        return (
            <div className="app">
                <h1>Dashboard</h1>
                <div className="page-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
