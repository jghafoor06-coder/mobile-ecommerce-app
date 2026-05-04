import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { products } from '../../data/data.json';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import SecondHeader from '../../components/SecondHeader';
import Animated, { FadeInDown, Easing, FadeInUp } from 'react-native-reanimated';

const Category = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const { category } = route.params;

  const filteredproducts =
    category === 'All'
      ? products
      : products.filter(item => item.category === category);

  return (
    <SafeAreaView>
      <SecondHeader title={"Category"} showBack={true} showCart={true} />
      <View style={{ padding: 20, paddingTop: 20, backgroundColor: '#fff', height: '100%' }}>
       <Animated.Text style={styles.mainheading} 
        entering={FadeInUp.delay(100).duration(800).easing(Easing.ease)}
       >{category} products</Animated.Text>
      <FlatList
        data={filteredproducts}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.container}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <Animated.View style={styles.card}
            entering={FadeInDown.delay(100).duration(800).easing(Easing.ease)}
          >
            <Image source={{ uri: item.image }} style={styles.img} />

            <View style={styles.content}>
              <Text numberOfLines={2}>{item.name}</Text>

              <Text style={styles.price}>${item.price}</Text>

              <TouchableOpacity
                style={styles.bg}
                activeOpacity={0.8}
                onPress={() => {
                  navigation.navigate('productdetail', { productId: item.id });
                }}
              >
                <Text style={styles.text}>View Product</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        )}
      />
    </View>
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({
  mainheading: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 20,
  },

  container: {
    paddingBottom: 160,
  },

  card: {
    width: '48%',
    backgroundColor: '#fff',
    marginBottom: 12,
    borderRadius: 10,
    elevation: 3,
    overflow: 'hidden',
  },

  img: {
    width: '100%',
    height: 120,
  },

  content: {
    padding: 10,
  },

  name: {
    fontSize: 14,
    fontWeight: '400',
  },

  price: {
    fontSize: 15,
    fontWeight: '700',
    marginVertical: 10,
    color: '#666463',
  },

  bg: {
    backgroundColor: 'rgba(29, 187, 139, 0.8)',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  
  text: {
    color: 'white',
    fontWeight: '500',
  },
});
