import React from 'react';
// import * as images from '../images/images';
import {StyleSheet, View, Text, Image, Button} from 'react-native';

const ImageDetails = () => {
  return (
    <Image
      style={styles.tinyLogo}
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
      }}
    />
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    marginTop: 20,
    marginLeft: 20,
    width: '25%',
    height: '70%',
    borderRadius: 10,
  },
});
export default ImageDetails;
