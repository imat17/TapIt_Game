import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FormLogin from '../components/form/FormLogin';
import { useNavigation } from '@react-navigation/native';

const Login = ( { validateContent, validateLength }) => {

  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('Register')
  }

  return (
    <View style={styles.center}>
      <View>
        <Text style={styles.title}>Hello Again !</Text>
        <Text style={styles.subtitle}>Welcome back, you've been missed!</Text>
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
};

const styles = StyleSheet.create({
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
   fontSize: 22,
   color: 'rgb(0,1,63)',
   fontWeight: 'bold',
   padding: 10,
   textAlign: 'center',
  },
  subtitle: {
    fontSize: 17,
    color: 'rgb(39,33,33)',
    textAlign: 'center',
    padding: 10,
  }
});

export default Login;