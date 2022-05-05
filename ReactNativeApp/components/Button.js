import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Appstyles from '../App.scss';
import left from '../assets/icons/left.png';


export const CircleButton = () => {
  return (
    <TouchableOpacity style={Appstyles.circleButton}>
        <Image source={left} style={{
            width: 24,
            height: 24
        }}/>
    </TouchableOpacity>
  )
}

export const AuthButton = ( { title, handlePress }) => {
    return (
        <TouchableOpacity style={Appstyles.authButton} onPress={handlePress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}