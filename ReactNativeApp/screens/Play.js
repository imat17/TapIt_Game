import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Play = (props) => {

  const [score, setScore] = useState(0);

  let mode = props.route.params.mode;

  const handleTouch = () => {
    setScore(score + 1);
  }


  return (
      <TouchableOpacity style={styles.center} onPress={handleTouch}>
        <Text>Play {mode}</Text>
        <Text>{score}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Play