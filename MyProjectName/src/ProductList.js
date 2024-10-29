import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const ProductList = ({ products, setSelectedProduct }) => {
  return (
    <View>
      <Text style={styles.productListTitle}>Select a Product:</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedProduct(item)}>
            <Text style={styles.productItem}>{item.name} ({item.provider})</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productItem: {
    padding: 15,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
  },
});

export default ProductList;
