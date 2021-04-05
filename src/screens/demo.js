import React from 'react';
import {WHATSAPP} from '../images/images';
import * as images from '../images/images';

import ImageDeatails from '../components/Image/imageDetails';
import {StyleSheet, View, Text, Image, Button} from 'react-native';

const demo = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          height: '20%',
          width: '100%',
          backgroundColor: 'yellow',
          marginTop: 10,
        }}>
        <Image style={styles.img} source={WHATSAPP} />
        <ImageDeatails width={'25%'} height={'75%'} />
        <Text style={{fontSize: 20, top: 40, left: 20}}> React-Native </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: '20%',
          width: '100%',
          backgroundColor: 'yellow',
          marginTop: 10,
        }}>
        <Image style={styles.img} source={images.FACEBOOK} />
        <ImageDeatails width={'25%'} height={'75%'} />
        <Text style={{fontSize: 20, top: 40, left: 20}}> Practice </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: '20%',
          width: '100%',
          backgroundColor: 'yellow',
          marginTop: 10,
        }}>
        <Image style={styles.img} source={images.DOWNLOAD} />

        <ImageDeatails width={'25%'} height={'75%'} />
        <Text style={{fontSize: 20, top: 40, left: 20}}> Schedule </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: '20%',
          width: '100%',
          backgroundColor: 'yellow',
          marginTop: 10,
        }}>
        <Image style={styles.img} source={images.INSTAGRAM} />

        <ImageDeatails width={'25%'} height={'75%'} />
        <Text style={{fontSize: 20, top: 40, left: 20}}> JAVA Script </Text>
      </View>
    </>
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
  img: {
    marginTop: 20,
    marginLeft: 20,
    width: '25%',
    height: '70%',
    borderRadius: 10,
  },
});
export default demo;
