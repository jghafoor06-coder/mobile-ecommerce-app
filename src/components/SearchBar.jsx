import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, {FadeInLeft, Easing} from 'react-native-reanimated';
import React from 'react';

const SearchBar = () => {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate('search')}>
      <Animated.View style={style.con}
        entering={FadeInLeft.delay(2000).duration(800).easing(Easing.ease)}
      >
        <TextInput
          placeholder="Search here ..."
          placeholderTextColor="#a3a2a0"
          style={style.Bar}
          editable={false}
          pointerEvents="none"
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default SearchBar;

const style = StyleSheet.create({
  con: {
    alignItems: 'center',
  },
  Bar: {
    color: 'black',
    padding: 10,
    borderColor: '#d9d8d7',
    width: 320,
    borderWidth: 1,
    borderRadius: 8,
  },
});