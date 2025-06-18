import { Text, StyleSheet, Image, Dimensions, Animated } from 'react-native';
import React from 'react';
import { Images } from '../constants';
import { Display } from '../utils';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.6;
const CARD_HEIGHT = CARD_WIDTH * 1.2;

const NewArrivals = ({ name, img, price, scale }) => {
  return (
    <Animated.View style={[styles.cardContainer, { transform: [{ scale }] }]}>
      <Image source={Images[img]} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>₹ {price}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: CARD_WIDTH,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 16,
    elevation: 4,
    alignItems: 'center',
    paddingBottom: 12,
  },
  image: {
    width: '100%',
    height: Display.setWidth(90),
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    color: '#333',
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    fontWeight: '500',
    color: '#777',
    marginTop: 4,
  },
});

export default NewArrivals;
