import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingStack from './OnBoardingStack';
import OnBoardingStack from './OnBoardingStack';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Onboarding'}
        component={OnBoardingStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
