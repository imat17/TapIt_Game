import { View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import client from '../../api/client';
import styles from '../../styles/components/Home';


const getInitialState = (fieldKeys) => {
    const state = {};
    fieldKeys.forEach((key) => {
      state[key] = '';
    });
  
    return state;
  };
  
  const FormLogin = ({ fields, buttonText }) => {

    const navigation = useNavigation();

    const handleRegister = async () => {
      await client.post('/api/user/login', {
        ...values
      })
      .then((res) => {
        console.log(res.data);
        setValues(getInitialState(fieldKeys))
        navigation.navigate('Play');
        })
        .catch((err) => {
            console.log(err);
        })
        console.log(values);
      }


    const fieldKeys = Object.keys(fields);
    const [values, setValues] = useState(getInitialState(fieldKeys));
  
    const onChangeValue = (key, value) => {
      const newState = { ...values, [key]: value };
      setValues(newState);
    };

 
    return (
        <View style={styles.inputContainer}>
          {fieldKeys.map((key) => {
            const field = fields[key];
            return (
              <View key={key}>
                <TextInput
                style={styles.input}
                  {...field.inputProps}
                  placeholder={field.placeholder}
                  value={values[key]}
                  onChangeText={(text) => onChangeValue(key, text)}
                />
              </View>
            );
          })}
          <Button title={buttonText} onPress={handleRegister}/>
        </View>
      );
  };


export default FormLogin