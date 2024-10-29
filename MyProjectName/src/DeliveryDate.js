import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DeliveryDate = ({ date }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>Estimated Delivery Date: {date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    borderColor: 'green',
    borderWidth: 1,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DeliveryDate;
