import { StyleSheet, View, FlatList, Image, Dimensions } from 'react-native';
import React from 'react';
import Animated, {FadeInRight, Easing} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const Swiper = () => {
  const data = [
    {
      id: 1,
      image:
        'https://plus.unsplash.com/premium_photo-1677995700941-100976883af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 2,
      image:
        'https://plus.unsplash.com/premium_photo-1661329971924-13892d896c0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
    },
    {
      id: 3,
      image:
        'https://plus.unsplash.com/premium_photo-1672883552013-506440b2f11c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8',
    },
  ];

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Animated.View
            style={{ marginHorizontal: 10, marginTop: 20 }}
            entering={FadeInRight.delay(100).duration(800).easing(Easing.ease)}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                width: width * 0.8,
                height: 150,
                marginBottom: 10,
                borderRadius: 10,
              }}
            />
          </Animated.View>
        )}
      />
    </View>
  );
};

export default Swiper;

const styles = StyleSheet.create({});
