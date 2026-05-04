import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SecondHeader from '../../components/SecondHeader';

const History = () => {
  return (
    <View style={styles.center}>
      <Text style={{ fontSize: 18, color: '#c0bebd', fontWeight: '500' }}>
        History Not Found
      </Text>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 10,
    backgroundColor: '#fff',
    height: '100%',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
