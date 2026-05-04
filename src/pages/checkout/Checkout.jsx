import { View, Text } from 'react-native';
import React from 'react';
import { applyMiddleware } from '@reduxjs/toolkit';

const Checkout = () => {
  // Middleware function to log actions and state changes
  // always put the middleware function in middleware folder and import it in store file and add it to the applyMiddleware function
  // middleware is a function that takes the store as an argument and returns a function that takes the next middleware as an argument and returns a function that takes the action as an argument and returns the result of calling the next middleware with the action.

  // const logger = (store) => (next) => (action) => {
  //   next(action);
  //   console.log('Action:', action);
  //   console.log('State after action:', store.getState());
  // }

  return (
    <View>
      <Text>Checkout</Text>
    </View>
  );
};

export default Checkout;
