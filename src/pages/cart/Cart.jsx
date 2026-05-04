import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Animated, {
  FadeInDown,
  Easing,
  FadeInLeft,
} from 'react-native-reanimated';
import React, { useState, useCallback } from 'react';
import SecondHeader from '../../components/SecondHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getAllCarts, getSingleProduct, deleteCart } from '../../api/api';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const fetchCarts = async () => {
        try {
          setLoading(true);

          const cartData = await getAllCarts();
          const safeData = Array.isArray(cartData) ? cartData : [];

          let fullItems = [];
          let sum = 0;

          for (const cart of safeData) {
            for (const item of cart.products) {
              const productId = item.productId;

              const product = await getSingleProduct(productId);

              if (!product) continue;

              const newItem = {
                id: product.id,
                title: product.title,
                price: product.price,
                description: product.description,
                image: product.image,
                quantity: item.quantity || 1,
              };

              fullItems.push(newItem);
              sum += product.price * newItem.quantity;
            }
          }

          setItems(fullItems);
          setTotal(sum);
          setLoading(false);
        } catch (error) {
          console.log('Error fetching cart:', error);
          setLoading(false);
        }
      };

      fetchCarts();
    }, []),
  );

  const handleDelete = async id => {
    try {
      await deleteCart(id);

      const updated = items.filter(item => item.id !== id);
      setItems(updated);

      const newTotal = updated.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );

      setTotal(newTotal);
    } catch (error) {
      console.log('Delete error:', error);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#76C893" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <SecondHeader title="My Cart" showBack={true} showCart={true} />

      <View style={styles.maincontainer}>
        {/* TOP */}
        <Animated.View
          style={styles.textcontainer}
          entering={FadeInLeft.delay(100).duration(800).easing(Easing.ease)}
        >
          <Text style={styles.lefttext}>Delivery to</Text>
          <Text style={styles.righttext}>Salatagia City, Central Java</Text>
        </Animated.View>

        {items.length === 0 ? (
          <Text style={styles.emptyText}>Your cart is empty</Text>
        ) : (
          <FlatList
            data={items}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1, marginTop: 10 }}
            renderItem={({ item }) => (
              <Animated.View
                style={styles.card}
                entering={FadeInDown.delay(100)
                  .duration(800)
                  .easing(Easing.ease)}
              >
                <Image source={{ uri: item.image }} style={styles.img} />

                <View style={styles.info}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('productdetail', {
                        productId: item.id,
                      })
                    }
                  >
                    <Text numberOfLines={2} style={styles.name}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>

                  <Text numberOfLines={2} style={styles.desc}>
                    {item.description}
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <View>
                      <Text style={styles.qty}>Qty: {item.quantity}</Text>

                      <Text style={styles.price}>$ {item.price}</Text>
                    </View>

                    <TouchableOpacity
                      onPress={() => handleDelete(item.id)}
                      style={{ justifyContent: 'center', paddingRight: 10 }}
                      hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
                    >
                      <Ionicons
                        name="trash-outline"
                        size={20}
                        color="#f11010"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </Animated.View>
            )}
          />
        )}

        {/* BOTTOM */}
        <Animated.View
          style={styles.bottomcontainer}
          entering={FadeInDown.delay(100).duration(800).easing(Easing.ease)}
        >
          <View style={styles.totalRow}>
            <Text>Total</Text>
            <Text>$ {total.toFixed(2)}</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('cartstack', {
                screen: 'payment',
              })
            }
          >
            <Text style={styles.continueText}>Select payment method</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    color: '#555',
  },
  maincontainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 15,
  },
  textcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingVertical: 15,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    color: '#555',
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 12,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginHorizontal: 5,
  },

  img: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },

  info: {
    flex: 1,
    marginLeft: 10,
  },

  name: {
    fontSize: 14,
    fontWeight: '500',
  },

  desc: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },

  qty: {
    fontSize: 12,
    marginTop: 6,
  },

  price: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 6,
  },

  bottomcontainer: {
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingTop: 15,
    paddingBottom: 15,
  },

  lefttext: {
    fontSize: 12,
    fontWeight: '400',
  },

  righttext: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },

  button: {
    marginTop: 10,
  },

  continueText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#76C893',
    color: '#fff',
    padding: 12,
    borderRadius: 5,
  },
});
