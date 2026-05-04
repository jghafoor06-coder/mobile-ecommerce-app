import {
  View,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { products } from '../../data/data.json';
import SecondHeader from '../../components/SecondHeader';

const SearchPage = () => {
  const navigation = useNavigation();

  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = text => {
    setSearch(text);

    const filtered = products.filter(item =>
      item.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()),
    );
    setFilteredProducts(filtered);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <SecondHeader
          showBack={true}
          showCart={true}
          showSearch={true}
          onSearchChange={handleSearch}
        />

        {filteredProducts.length === 0 ? (
          <View style={styles.center}>
            <Text style={{ fontSize: 18, color: '#c0bebd', fontWeight: '500' }}>
              Product Not Found
            </Text>
          </View>
        ) : (
          <FlatList
            data={filteredProducts}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            contentContainerStyle={{ paddingBottom: 10 }}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.img} />

                <View style={styles.content}>
                  <Text numberOfLines={2}>{item.name}</Text>

                  <Text style={styles.price}>${item.price}</Text>

                  <TouchableOpacity
                    style={styles.bg}
                    activeOpacity={0.8}
                    onPress={() => {
                      navigation.navigate('productdetail', {
                        productId: item.id,
                      });
                    }}
                  >
                    <Text style={styles.text}>View Product</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 10,
    backgroundColor: '#fff',
    height: '100%',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondHeader: {
    marginBottom: 10,
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
