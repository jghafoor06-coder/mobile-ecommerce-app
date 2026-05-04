import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInUp, Easing } from 'react-native-reanimated';

const categoriesdata = [
  { id: 1, name: 'Electronics', icon: '📺', bg: '#e6f0ff' },
  { id: 2, name: 'Fashion', icon: '🥼', bg: '#e6f7ff' },
  { id: 3, name: 'Fitness', icon: '🏋️‍♀️', bg: '#fff0e6' },
  { id: 4, name: 'Accessories', icon: '👜', bg: '#ffe6e6' },
  { id: 5, name: 'All', icon: '⬜', bg: '#e6f7f1' },
];

const Categories = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Animated.Text style={styles.heading} entering={FadeInUp.delay(100).duration(800).easing(Easing.ease)}>
        Category
      </Animated.Text>

      <FlatList
        horizontal
        data={categoriesdata}
        scrollEnabled={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Animated.View
            entering={FadeInUp.delay(100).duration(800).easing(Easing.ease)}
          >
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() =>
                navigation.navigate('category', { category: item.name })
              }
            >
              <View style={[styles.iconBox, { backgroundColor: item.bg }]}>
                <Text style={styles.icon}>{item.icon}</Text>
              </View>
              <Text style={styles.label}>{item.name}</Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
  },
  label: {
    marginTop: 6,
    fontSize: 12,
    color: '#555',
  },
});
