import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../../pages/cart/Cart';
import Payments from '../../pages/payments/Payments';

const Stack = createNativeStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="cart" component={Cart} />
      <Stack.Screen name="payment" component={Payments} />
    </Stack.Navigator>
  );
};

export default CartStack;
