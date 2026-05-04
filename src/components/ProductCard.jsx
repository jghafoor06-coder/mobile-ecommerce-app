import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { getProducts } from '../api/api';
import Animated, { FadeInDown, Easing } from 'react-native-reanimated';

const ProductCard = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setData(productsData);
      } catch (err) {
        setError('523 error fetching products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <View style={{ marginTop: 50 }}>
        <ActivityIndicator
          size="large"
          color="#76C893"
        />
      </View>
    );
  }

  return (
    <SafeAreaView>
      {error && <Text style={styles.error}>{error}</Text>}
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.container}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <Animated.View
            style={styles.card}
            entering={FadeInDown.delay(500).duration(800).easing(Easing.ease)}
          >
            <Image source={{ uri: item.image }} style={styles.img} />

            <View style={styles.content}>
              <Text numberOfLines={2} style={styles.name}>
                {item.title}
              </Text>

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
    </SafeAreaView>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  error: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
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
    height: 100,
    resizeMode: 'contain',
  },

  content: {
    padding: 10,
  },

  name: {
    fontSize: 12,
    fontWeight: '400',
  },

  price: {
    fontSize: 14,
    fontWeight: '700',
    marginVertical: 5,
    color: '#666463',
  },

  bg: {
    backgroundColor: 'rgba(29, 187, 139, 0.8)',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontWeight: '500',
  },
});
