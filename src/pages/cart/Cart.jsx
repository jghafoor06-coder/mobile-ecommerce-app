import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import Animated, {
  FadeInDown,
  Easing,
  FadeInLeft,
} from 'react-native-reanimated';

import SecondHeader from '../../components/SecondHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cart/cartSlice';

const Cart = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.item);

  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0,
  );

  const removeItem = id => {
    dispatch(removeFromCart(id));
  };

  // if (loading) {
  //   return (
  //     <View style={styles.center}>
  //       <ActivityIndicator size="large" color="#76C893" />
  //     </View>
  //   );
  // }

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

        {cartItems.length === 0 ? (
          <Text style={styles.emptyText}>Your cart is empty</Text>
        ) : (
          <FlatList
            data={cartItems}
            keyExtractor={item => String(item.id)}
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
                      {item.name}
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
                    {/* <View>
                      <Text style={styles.qty}>Qty: {item.quantity}</Text>

                      <Text style={styles.price}>$ {item.price}</Text>
                    </View> */}

                    <TouchableOpacity
                      onPress={() => removeItem(item.id)}
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
