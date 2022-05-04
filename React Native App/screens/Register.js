import { View, Text } from 'react-native'
import React from 'react'
import FormRegister from '../components/form/FormRegister'
import Appstyles from '../App.scss';

const Register = ( { validateContent, validateLength}) => {
  return (
    <View style={Appstyles.center}>
      <View>
        <Text style={Appstyles.title}>Hello Taper !</Text>
        <Text style={Appstyles.subtitle}>Let's create your account before playing</Text>
      </View>
      <FormRegister fields={{
        pseudo: {
          placeholder: 'Pseudo',
          validators: [validateLength],
        },
        email: {
          placeholder: 'Email'
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

export default Register;