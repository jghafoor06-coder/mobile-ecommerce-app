import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './homestack/HomeStack';
import AuthStack from './authstack/AuthStack'
import CartStack from './cartstack/CartStack'

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={TabNavigation} />
      <Stack.Screen name='authstack' component={AuthStack}/>
      <Stack.Screen name='cartstack' component={CartStack}/>
    </Stack.Navigator>
  );
};

export default Root;
