/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
  isDark: false,
};

export const themeReducer = createReducer(initialState, {
  [types.TOGGLE_THEME](state: any, action: any) {
    return { ...state, isDark: action.isDark };
  },
});
