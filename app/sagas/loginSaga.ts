/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call, select } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import { Alert } from 'react-native';
// import loginUser from 'app/api/methods/loginUser';
import * as loginActions from '../actions/loginActions';

// Our worker Saga that logins the user
export default function* loginAsync() {
  yield put(loginActions.enableLoader());

  //how to call api
  //const response = yield call(loginUser, action.username, action.password);
  //mock response
  const response = { success: true, data: { id: 1 } };

  if (response.success) {
    yield put(loginActions.onLoginResponse(response.data));
    //@ts-ignore
    yield put(loginActions.disableLoader({}));

    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  } else {
    yield put(loginActions.loginFailed());
    //@ts-ignore
    yield put(loginActions.disableLoader({}));
    setTimeout(() => {
      //@ts-ignore
      Alert.alert('BoilerPlate', response.Message);
    }, 200);
  }
}
