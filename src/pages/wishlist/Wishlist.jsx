import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { removefromwishlist } from '../../redux/wishlist/WishlistSlice';

const Wishlist = ({ navigation }) => {
  const dispatch = useDispatch();

  // Read the actual wishlist array from Redux
  const wishlistItems = useSelector(state => state.wishlist.item);

  // Remove a product using its ID
  const removeItem = (id)=> {
    dispatch(removefromwishlist(id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Wishlist</Text>
      </View>

      {wishlistItems.length === 0 ? (
        <View style={styles.center}>
          <Ionicons name="heart-outline" size={55} color="#ccc" />
          <Text style={styles.emptyText}>Your wishlist is empty</Text>
        </View>
      ) : (
        <FlatList
          data={wishlistItems}
          keyExtractor={item => String(item.id)}
          contentContainerStyle={{ paddingBottom: 15 }}
          ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('productdetail', {
                    productId: item.id,
                  })
                }
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.Image}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <View style={styles.info}>
                <Text style={styles.name} numberOfLines={2}>
                  {item.name}
                </Text>

                <Text style={styles.price}>
                  {item.price != null ? `$ ${item.price}` : 'Price unavailable'}
                </Text>

                <Text style={styles.category}>{item.category}</Text>
              </View>

              <TouchableOpacity
                style={styles.removeBtn}
                activeOpacity={0.7}
                onPress={() => removeItem(item.id)}
              >
                <Ionicons name="trash-outline" size={22} color="#ff6b6b" />
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      <View style={{ marginTop: 20 }}>
        <TouchableOpacity
          style={styles.shopButton}
          onPress={() => navigation.navigate('Home')}
          activeOpacity={0.7}
        >
          <Text style={styles.shopButtonText}>Continue Shopping</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 20,
    marginTop: 40,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
    marginTop: 10,
    marginBottom: 20,
  },
  shopButton: {
    backgroundColor: '#76C893',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  shopButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  Image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  info: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  price: {
    fontSize: 15,
    color: '#76C893',
    fontWeight: 'bold',
    marginTop: 4,
  },
  category: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  removeBtn: {
    padding: 10,
  },
});
