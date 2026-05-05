import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  FadeInUp,
  Easing,
} from 'react-native-reanimated';

const HEADER_HEIGHT = 100;

const Header = ({ scrollY }) => {
  const navigation = useNavigation();

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollY.value,
      [0, HEADER_HEIGHT],
      [0, -HEADER_HEIGHT],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{ translateY }],
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}
    entering={FadeInUp.delay(2000).duration(800).easing(Easing.ease)}
    >
      <View>
        <Text style={styles.smallText}>Delivery address</Text>
        <Text style={styles.bigText}>Salatiga city, Central Java</Text>
      </View>

      <Animated.View style={styles.iconsbox}>
        <TouchableOpacity
          onPress={() => navigation.navigate('cartstack', { screen: 'cart' })}
          hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
        >
          <Ionicons name="cart-outline" size={30} color={'#b8b6b4'} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('notification')}
          hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
        >
          <Ionicons name="notifications-outline" size={30} color={'#b8b6b4'} />
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 15,
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingHorizontal: 15,
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  smallText: {
    color: '#ceccc8',
    fontSize: 13,
  },

  bigText: {
    color: '#080808',
    fontSize: 16,
    fontWeight: '500',
  },

  iconsbox: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },

  icons: {
    fontSize: 25,
  },
});
