import { View, Text } from 'react-native'
import React from 'react'
import FormLogin from '../components/form/FormLogin';
import Appstyles from '../App.scss';

const Login = ( { validateContent, validateLength }) => {
  return (
    <View style={Appstyles.center}>
      <View>
        <Text style={Appstyles.title}>Hello Again !</Text>
        <Text style={Appstyles.subtitle}>Welcome back, you've been missed!</Text>
      </View>
      <FormLogin fields={{
        pseudo: {
          placeholder: 'Pseudo',
          validators: [validateLength],
        },
        password: {
          placeholder: 'Password',
          validators: [validateContent, validateLength],
          inputProps: {
            secureTextEntry: true,
          },
        }
      }}
      buttonText = 'Submit'/>
    </View>
  )
}

export default Login;