import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { navigationRef } from './NavigationService';

import Login from '../screens/Login';
import Home from '../screens/Home';
import ThemeController from '../components/ThemeController';
import { StatusBar } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const BottomNavigation = createMaterialBottomTabNavigator();

function BottomNavigationContainer() {
  return (
    <BottomNavigation.Navigator>
      <BottomNavigation.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
      <BottomNavigation.Screen name="HomeCopy" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
      <BottomNavigation.Screen name="HomeCopy2" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
    </BottomNavigation.Navigator>
  );
}
const homeOptions = {
  title: 'Home',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: () => <ThemeController />,
};

function App(props: any) {
  const { theme } = props;
  //@ts-ignore
  const isLoggedIn = useSelector(state => state.loginReducer.isLoggedIn);

  return (
    //@ts-ignore
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen name="Home" component={BottomNavigationContainer} options={homeOptions} />
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              // When logging out, a pop animation feels intuitive
              // You can remove this if you want the default 'push' animation
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
              headerRight: () => <ThemeController />,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
