import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen';
import PolicyDetails from '../screens/PolicyDetails';
import SignInScreen from '../screens/SignInScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

const Appstack = createStackNavigator({
  Home:HomeScreen,
  PolicyDetails:PolicyDetails,
});
const AuthStack = createStackNavigator({
  SignIn:SignInScreen,
});

// Read more at https://reactnavigation.org/docs/en/auth-flow.html

export default createAppContainer( createSwitchNavigator({
  AuthLoading:AuthLoadingScreen,
  App:Appstack,
  Auth:AuthStack
},
{
  initialRouteName:'AuthLoading',
})
);
