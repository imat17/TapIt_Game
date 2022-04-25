import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import client from '../api/client';

const getInitialState = (fieldKeys) => {
    const state = {};
    fieldKeys.forEach((key) => {
      state[key] = '';
    });
  
    return state;
  };
  
  const Form = ({ fields, buttonText }) => {

    const handleRegister = async () => {
        await client.post('/api/user/signup', {
            ...values
        })
        .then((res) => {
            console.log(res);
            setValues(getInitialState(fieldKeys))
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
        <View>
          {fieldKeys.map((key) => {
            const field = fields[key];
            return (
              <View key={key}>
                <Text>{field.label}</Text>
                <TextInput
                  {...field.inputProps}
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

export default Form;