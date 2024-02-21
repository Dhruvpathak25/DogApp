// SignUpScreen.js
import React from 'react';
import {View, Text, Button} from 'react-native';

const SignUpScreen = ({navigation}) => {
  // Add your sign up logic here
  // For simplicity, just a text and a button to navigate
  return (
    <View>
      <Text>Sign Up Screen</Text>
      {/* Add a button to navigate to main screen */}
      <Button title="Sign Up" onPress={() => navigation.navigate('Main')} />
    </View>
  );
};

export default SignUpScreen;
