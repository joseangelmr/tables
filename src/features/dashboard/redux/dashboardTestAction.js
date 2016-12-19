import {
  DASHBOARD_TEST_ACTION,
} from './constants';

export function dashboardTestAction() {
  return {
    type: DASHBOARD_TEST_ACTION,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case DASHBOARD_TEST_ACTION:
      return {
        ...state,
      };

    default:
      return state;
  }
}
