import { View, Text, StyleSheet } from 'react-native';
import { Link } from '@react-navigation/native';
import React from 'react';
 
const selectMode = () => {



  return (
    <View style={styles.center}>
      <Text>Select your play mode</Text>
      <View>
          <Link to={{ screen: 'Play', params: {mode: 'infinite'}}} style={styles.button}>Infinite</Link>
          <Link to={{ screen: 'Play', params: {mode: 'tensec'}}} style={styles.button}>10s</Link>
          <Link to={{ screen: 'Play', params: {mode: 'thirtysec'}}} style={styles.button}>30s</Link>
          <Link to={{ screen: 'Play', params: {mode: 'sixtysec'}}} style={styles.button}>60s</Link>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
   marginVertical: 10,
   paddingVertical: 5,
   paddingHorizontal: 35,
   backgroundColor: 'black',
   color: 'white',
   textAlign: 'center',
  }
});

export default selectMode;