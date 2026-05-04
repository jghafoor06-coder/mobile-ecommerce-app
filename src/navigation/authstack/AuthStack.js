import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signup from '../../pages/login/Signup';
import Login from '../../pages/login/Login';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return(
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name='signup' component={Signup}/>
      </Stack.Navigator>
    )
};

export default AuthStack;