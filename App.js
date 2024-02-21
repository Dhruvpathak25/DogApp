// App.js
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform} from 'react-native'; // Import Platform module
import SimpleImageSplashScreen from './screens/SplashScreen';
import IntroductionScreen from './screens/IntroductionScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import MainScreen from './screens/MainScreen';
import DogScreen from './screens/DogScreen';

const Stack = createStackNavigator();

const App = () => {
  const [isFirstTime, setIsFirstTime] = useState(null);

  useEffect(() => {
    // Check if it's the first time opening the app
    AsyncStorage.getItem('isFirstTime')
      .then(value => {
        if (value === null) {
          setIsFirstTime(true);
          AsyncStorage.setItem('isFirstTime', 'false');
        } else {
          setIsFirstTime(false);
        }
      })
      .catch(error => console.log(error));
  }, []);

  if (isFirstTime === null) {
    // If isFirstTime is still null, return null or loading indicator
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Splash Screen */}
        {Platform.OS === 'android' && (
          <Stack.Screen
            name="Splash"
            component={SimpleImageSplashScreen}
            options={{headerShown: false}}
          />
        )}
        {/* Introduction Screen */}
        <Stack.Screen
          name="Introduction"
          component={IntroductionScreen}
          options={{headerShown: false}}
        />
        {/* Login Screen */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        {/* SignUp Screen */}
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{title: 'Sign Up'}}
        />
        {/* Main Screen */}
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{title: 'Main'}}
        />
        {/* Dog Screen */}
        <Stack.Screen
          name="Dog"
          component={DogScreen}
          options={{title: 'Dog'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
