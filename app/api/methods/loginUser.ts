import Api from '../../api';
import ApiConstants from '../ApiConstants';

export default function loginUser(username: string, password: string) {
  return Api(
    ApiConstants.LOGIN + '?username=' + username + '&password=' + password,
    null,
    'post',
    null,
  );
}
