import React from 'react';
// import * as images from '../images/images';
import styles from '../Image/styles';
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

export default ImageDetails;
