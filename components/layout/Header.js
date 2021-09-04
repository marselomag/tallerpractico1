import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Taller práctico 1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    // marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});
