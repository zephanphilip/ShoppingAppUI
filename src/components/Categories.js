import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import { Images } from "../constants";
import { Display } from '../utils';
import { useNavigation } from '@react-navigation/native';

export default function Categories({ name, img }) {
  const navigation = useNavigation();

  return (
    <View style={styles.section}>
      <TouchableOpacity style={styles.card} activeOpacity={0.85}>
        <ImageBackground 
          source={Images[img]} 
          style={styles.imageBackground}
          imageStyle={styles.image}
        >
          <View style={styles.overlay} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{name}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
  flex: 1,
  paddingHorizontal: 3,  // reduce horizontal space between cards
      // reduce vertical space between cards
},

  card: {
    borderRadius: 16,
    overflow: 'hidden',
    height: Display.setWidth(20),
    width: Display.setWidth(40),
    elevation: 4,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // black transparent overlay
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
