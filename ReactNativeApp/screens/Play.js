import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import SelectMode from '../components/play/SelectMode';
import client from '../api/client';

const Play = () => {

  const [score, setScore] = useState();

  const id = '627a3930f01ea620de3dfddf';

  useEffect(() => {
   const fetchScores = async () => {
      await client.get('/api/scores/allscores', {
        _id: id,
      })
      .then((res) => {
        console.log(res.data)
        // setScore(res.score.globalScore);
      })
      .catch((err) => {
        console.log(err)
      })
    };
      fetchScores()
  }, [])

  return (
    <View>
      <Text>{score}</Text>
      <SelectMode />
    </View>
  )
}

export default Play