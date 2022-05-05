import React from 'react'
import { View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Appstyles from '../App.scss';
import { AuthButton } from '../components/Button';


const Auth = () => {

  const navigation = useNavigation();

  return (
    <View style={Appstyles.center}>
    <View>
        <Text style={Appstyles.title}>Lets play and earn cryptos !</Text>
        <Text style={Appstyles.text}>Challenge your friends, be the best taper, earn cryptocurrencies !</Text>
    </View>
        <View style={Appstyles.authBtnContainer}>
          <AuthButton title='Register' handlePress={() => navigation.navigate('Register')}/>
          <AuthButton title='Login' handlePress={() => navigation.navigate('Login')}/>
        </View>
    </View>
  )
}

export default Auth;


