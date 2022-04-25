import React from 'react'
import { View, Text, TextInput } from 'react-native';
import Form from '../components/Form';
import Appstyles from '../App.scss';


const Home = () => {

  return (
    <View style={Appstyles.test}>
      <Form  fields={{
        pseudo: {
          label: 'Pseudo',
        },
        password: {
          label: 'Password',
          inputProps: {
            secureTextEntry: true,
          },
        }
      }}
      buttonText = 'Submit'
      />
    </View>
  )
}

export default Home;