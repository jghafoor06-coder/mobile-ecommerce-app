import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';

import Animated, { FadeInDown, Easing, FadeIn } from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SecondHeader from '../../components/SecondHeader';
import { products } from '../../data/data.json';
import { useDispatch, useSelector } from 'react-redux';
import {
  addtowishlist,
  removefromwishlist,
} from '../../redux/wishlist/WishlistSlice';
import { addToCart, removeFromCart } from '../../redux/cart/cartSlice';

const ProductsDetail = ({ navigation }) => {
  const route = useRoute();
  const { productId } = route.params;

  const dispatch = useDispatch();

  const wishlistItems = useSelector(state => state.wishlist.item);
  const cartItems = useSelector(state => state.cart.item);

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const isAddedToCart = cartItems.some(
    item => String(item.id) === String(product?.id),
  );

  const isWishlisted = wishlistItems.some(
    item => String(item.id) === String(product?.id),
  );

  useEffect(() => {
    const foundProduct = products.find(
      item => String(item.id) === String(productId),
    );
    setProduct(foundProduct || null);
    setLoading(false);
  }, [productId]);

  useEffect(() => {
    if (product) {
      setLoading(false);
    }
  }, [product]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#76C893" />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.center}>
        <Text>Product Not Found</Text>
      </View>
    );
  }

  return (
    <View style={styles.main}>
      <SecondHeader title={'Product Detail'} showBack={true} showCart={true} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/*Image*/}

        <Animated.Image
          source={{ uri: product.image }}
          style={styles.image}
          entering={FadeIn.delay(100).duration(1000).easing(Easing.ease)}
        />

        {/*Product detail*/}

        <Animated.View
          style={styles.container}
          entering={FadeInDown.delay(300).duration(800).easing(Easing.ease)}
        >
          <View style={styles.headerRow}>
            <Text style={styles.heading}>{product.name}</Text>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                if (isWishlisted) {
                  dispatch(removefromwishlist(product.id));
                } else {
                  dispatch(addtowishlist(product));
                }
              }}
            >
              <View style={styles.iconbox}>
                <Ionicons
                  name={isWishlisted ? 'heart' : 'heart-outline'}
                  size={30}
                  color={isWishlisted ? '#E5484D' : '#afadad'}
                />
              </View>
            </TouchableOpacity>
          </View>

          <Text style={styles.price}>$ {product.price}</Text>

          <View style={styles.descontainer}>
            <Text style={styles.desheading}>Description</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>
        </Animated.View>
      </ScrollView>

      {/*Add to cart & Buy now button*/}

      <Animated.View
        style={styles.bottomContainer}
        entering={FadeInDown.delay(300).duration(800).easing(Easing.ease)}
      >
        <TouchableOpacity
          style={styles.cartbutton}
          activeOpacity={0.8}
          onPress={() => {
            if (isAddedToCart) {
              dispatch(removeFromCart(product.id));
            } else {
              dispatch(addToCart(product));
            }
          }}
        >
          <Ionicons
            name="cart-outline"
            size={20}
            color="white"
            style={{ marginRight: 8 }}
          />
          <Text style={styles.cartButtonText}>
            {isAddedToCart ? 'REMOVE FROM CART' : 'ADD TO CART'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buyButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('payment', { productId: product.id })}
        >
          <Text style={styles.buyButtonText}>BUY NOW</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default ProductsDetail;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 400,
    backgroundColor: '#f9f9f9',
    resizeMode: 'cover',
  },

  container: {
    padding: 20,
    paddingRight: 30,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    flex: 1,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#3b3a3a',
  },
  iconbox: {
    backgroundColor: '#f0eeee',
    paddingTop: 12,
    height: 50,
    width: 50,
    borderRadius: 100,
    alignContent: 'center',
    alignItems: 'center',
  },
  descontainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
    paddingTop: 20,
  },
  desheading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#555',
    textTransform: 'uppercase',
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#777',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 35,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 10,
  },
  cartbutton: {
    backgroundColor: '#76C893',
    flex: 1.2,
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  cartButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyButtonText: {
    color: '#555',
    fontSize: 14,
    fontWeight: 'bold',
  },
  loading: {
    fontSize: 18,
    color: '#555',
  },
});
