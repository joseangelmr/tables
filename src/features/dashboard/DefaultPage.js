import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './redux/actions';


export class DefaultPage extends Component {
    static propTypes = {
        dashboard: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired,
    };

    render() {
        return (
            <div className="dashboard-default-page">
                Page Content: dashboard/DefaultPage
            </div>
        );
    }
}

/* istanbul ignore next */
function mapStateToProps(state) {
    return {
        dashboard: state.dashboard,
    };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DefaultPage);
