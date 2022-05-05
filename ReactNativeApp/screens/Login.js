import { View, Text } from 'react-native'
import React from 'react'
import FormLogin from '../components/form/FormLogin';
import { useNavigation } from '@react-navigation/native';
import Appstyles from '../App.scss';

const Login = ( { validateContent, validateLength }) => {

  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('Register')
  }

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
      <Text>Not a member ?
        <Text style={{
          color: 'blue',
          marginHorizontal: '10',
        }} onPress={handleNavigation}>Register now</Text>
      </Text>
    </View>
  )
}

export default Login;