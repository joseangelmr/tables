/**
 * Created by joseangelmr on 19/12/16.
 */
import React from 'react';
import {render} from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configStore from './common/configureStore';

import Root from './containers/Root'

const store = configStore();
const history = syncHistoryWithStore(browserHistory, store);


render(
    <Root store={store} history={history} />,
    document.getElementById('root')
);