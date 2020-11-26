import React from 'react';
import { View } from 'react-native';
import Button from '../../components/UiComponents/Button/Button';

import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());

  return (
    <View style={styles.container}>
      <Button
        onPress={onLogout}
        buttonText={'logout'}
      />
    </View>
  );
};

export default Home;
