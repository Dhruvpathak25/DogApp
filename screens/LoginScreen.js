// LoginScreen.js
import React from 'react';
import {View, Text, Button} from 'react-native';

const LoginScreen = ({navigation}) => {
  // Add your authentication logic here
  // For simplicity, just a text and a button to navigate
  return (
    <View>
      <Text>Login Screen</Text>
      {/* Add a button to navigate to main screen */}
      <Button title="Login" onPress={() => navigation.navigate('Main')} />
    </View>
  );
};

export default LoginScreen;
