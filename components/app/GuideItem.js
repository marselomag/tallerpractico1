import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default ({children, description}) => {
  return (
    <View style={styles.base}>
      <Text style={styles.description}>{description}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
  },
});
