import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { products } from '../../data/data.json';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

const Wishlist = ({ navigation }) => {

  const removeItem = () => {
     const updated = products.filter(item => item.id !== products.id) 
      
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Wishlist</Text>
      </View>

      {products.length === 0 ? (
        <View style={styles.center}>
          <Text style={styles.emptyText}>Your wishlist is empty</Text>
        </View>
      ) : (
        <View style={styles.card}>
          <Image source={{ uri: products[0].image }} style={styles.Image} />
          <View style={styles.info}>
            <Text style={styles.name}>{products[0].name}</Text>
            <Text style={styles.price}>$ {products[0].price}</Text>
          </View>
          <TouchableOpacity style={styles.removeBtn}>
            <Ionicons name="trash-outline" size={22} color="#ff6b6b" />
          </TouchableOpacity>
        </View>
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
    textAlign: "center",
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
  removeBtn: {
    padding: 10,
  },
});
