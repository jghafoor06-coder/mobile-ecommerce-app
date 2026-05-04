import { View, StyleSheet } from 'react-native';
import React from 'react';

import ProductCard from '../../components/ProductCard';
import SearchBar from '../../components/SearchBar';
import Swiper from '../../components/Swiper';
import Categories from '../../components/Categories';
import Header from '../../components/Header';

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

const Home = () => {

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <View style={styles.bg}>
      <Header scrollY={scrollY} />
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: 110 }}
      >
        <SearchBar />
        <Swiper />
        <Categories />
        <ProductCard />
      </Animated.ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  bg: {
    height: 'auto',
    backgroundColor: '#fff',
    padding: 4,
    flex: 1,
  },
});
