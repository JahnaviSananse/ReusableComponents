import React from 'react';
// import * as images from '../images/images';
import styles from '../Image/styles';
import {StyleSheet, View, Text, Image, Button} from 'react-native';

const ImageDetails = props => {
  return (
    <Image
      // style={styles.tinyLogo}
      style={{
        marginTop: 20,
        marginLeft: 20,
        width: props.width,
        height: props.height,
        borderRadius: 10,
      }}
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
      }}
    />
  );
};

export default ImageDetails;
