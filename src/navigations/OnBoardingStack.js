import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/onboarding/splash/SplashScreen';
import WelcomeScreen from '../screens/onboarding/welcome/WelcomeScreen';

const StackOnboarding = createStackNavigator();

const OnBoardingStack = () => {
  return (
    <StackOnboarding.Navigator>
      <StackOnboarding.Screen
        name={'splash'}
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <StackOnboarding.Screen
        name={'welcome'}
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
    </StackOnboarding.Navigator>
  );
};

export default OnBoardingStack;
