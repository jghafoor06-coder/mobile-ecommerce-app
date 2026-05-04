import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated, { FadeInUp, Easing } from 'react-native-reanimated';

const SecondHeader = ({
  title,
  showBack = false,
  showCart = false,
  showSearch = false,
  onSearchChange,
}) => {
  const navigation = useNavigation();

  const ICON_COLOR = '#A9A9A9';
  const ICON_SIZE = 26;

  return (
    <Animated.View
      style={styles.container}
      entering={FadeInUp.delay(100).duration(800).easing(Easing.ease)}
    >
      {/* LEFT (Back) */}
      <View style={styles.left}>
        {showBack && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
          >
            <Ionicons name="arrow-back-outline" size={25} color="#333" />
          </TouchableOpacity>
        )}
      </View>

      {/* CENTER (Title OR Search) */}
      <View style={styles.center}>
        {showSearch ? (
          <View style={styles.searchBox}>
            <Ionicons name="search-outline" size={18} color="#888" />
            <TextInput
              placeholder="Search..."
              placeholderTextColor="#a09e9e"
              style={styles.input}
              onChangeText={onSearchChange}
            />
          </View>
        ) : (
          <Text style={styles.title}>{title}</Text>
        )}
      </View>

      {/* RIGHT (Cart) */}
      <View style={styles.right}>
        {showCart && (
          <TouchableOpacity
            onPress={() => navigation.navigate('cartstack', { screen: 'cart' })}
            hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
          >
            <Ionicons name="cart-outline" size={30} color={ICON_COLOR} />
          </TouchableOpacity>
        )}
      </View>
    </Animated.View>
  );
};

export default SecondHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 30,
    paddingBottom: 10,
  },

  left: {
    flex: 1,
  },

  center: {
    flex: 4,
    alignItems: 'center',
  },

  right: {
    flex: 1,
    alignItems: 'flex-end',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 8,
    height: 40,
    width: '120%',
  },

  input: {
    flex: 1,
    marginLeft: 5,
    color: '#333',
  },
});
