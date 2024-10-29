import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import ProductList from './ProductList';
import DeliveryDate from './DeliveryDate';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [pincode, setPincode] = useState('');
  const [deliveryDate, setDeliveryDate] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products'); // Adjust URL for production
        setProducts(response.data);
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "Unable to fetch products.");
      }
    };
    fetchProducts();
  }, []);

  const handlePincodeSubmit = () => {
    if (isValidPincode(pincode) && selectedProduct) {
      const estimatedDate = estimateDeliveryDate(selectedProduct);
      setDeliveryDate(estimatedDate);
    } else {
      Alert.alert("Error", "Please enter a valid pincode and select a product.");
    }
  };

  const isValidPincode = (pincode) => {
    return /^\d{6}$/.test(pincode); // Assuming Indian pincodes
  };

  const estimateDeliveryDate = (product) => {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const today = new Date().toISOString().split('T')[0];

    // Logic based on selected provider
    if (product.provider === 'Provider A' && hour < 17) {
      return today; // Same-day delivery
    } else if (product.provider === 'Provider B') {
      return hour < 9 ? today : new Date(currentTime.setDate(currentTime.getDate() + 1)).toISOString().split('T')[0]; // Next-day delivery
    } else {
      // General Partners - assuming 2-5 days based on pincode
      return new Date(currentTime.setDate(currentTime.getDate() + 3)).toISOString().split('T')[0]; // 3 days as an example
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Delivery Estimator</Text>
      <ProductList products={products} setSelectedProduct={setSelectedProduct} />
      <TextInput
        style={styles.input}
        placeholder="Enter Pincode"
        keyboardType="numeric"
        value={pincode}
        onChangeText={setPincode}
      />
      <Button title="Check Delivery Date" onPress={handlePincodeSubmit} />
      {deliveryDate && <DeliveryDate date={deliveryDate} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
});

export default App;
