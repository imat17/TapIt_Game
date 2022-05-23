import AsyncStorage from '@react-native-async-storage/async-storage';

export const setCredentials = async (keys) => {
  try {
    await AsyncStorage.setItem('keys', JSON.stringify(keys))
  } catch (e) {
    console.log(e)
  }
}

export const getCredentials = async () => {
  try {
    let credentials = await AsyncStorage.getItem('keys')

    if (credentials != null) {
      return JSON.parse(credentials)
    } else {
      return null
    }
  } catch (e) {
    console.log(e)
  }
  return null
}