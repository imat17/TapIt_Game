import { View, Text } from 'react-native';
import React from 'react';
import client from '../../api/client';

const selectMode = () => {
  return (
    <View style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
      <Text>selectMode</Text>
      <View>
          <Text></Text>
          <Text>10s</Text>
          <Text>30s</Text>
          <Text>60s</Text>
      </View>
    </View>
  )
}

export default selectMode