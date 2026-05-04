import {Text, View } from 'react-native';
import React from 'react';
import SecondHeader from '../../components/SecondHeader';

const Notification = () => {
  return (
    <View>
      <SecondHeader title={'Notification'} showBack={true} showCart={true} />
      <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginTop: 300}}>
        <Text style={{ fontSize: 18, color: '#9c9c9c', fontWeight: '500' }}>
          Notification not found
        </Text>
      </View>
    </View>
  );
};

export default Notification;
