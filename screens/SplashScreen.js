import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Animated, Text} from 'react-native';
const SimpleImageSplashScreen = ({navigation}) => {
  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      navigation.replace('Introduction');
    }, 3000); // 3 seconds for the splash screen
  }, [navigation, opacity]);

  const imageUrl = require('../assets/splash.png');
  return (
    <View style={styles.container}>
      <Animated.Image
        source={imageUrl}
        style={[styles.image, {opacity: opacity}]}
        resizeMode="contain"
      />
      <Text style={styles.text}>Pat Me!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: '80%', // Adjust the width as needed
    height: '80%', // Adjust the height as needed
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SimpleImageSplashScreen;
