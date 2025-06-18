import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Images } from "../constants";
import { Display } from '../utils';
import { useNavigation } from '@react-navigation/native';

export default function Featured({ name, img, price }) {
  const navigation = useNavigation();

  return (
    <View style={styles.section}>
      <TouchableOpacity style={styles.card} activeOpacity={0.85}>
        <Image 
          source={Images[img]}
          style={styles.imageBackground}
        />
        <View style={styles.overlay} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{name}</Text>
          {price && <Text style={styles.price}>${price}</Text>}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    flex: 1,
    paddingHorizontal: 3, // reduce horizontal space between cards
    paddingVertical: 2,   // reduce vertical space between cards
  },
  
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    height: Display.setHeight(30), // Changed to setHeight for proper proportions
    width: Display.setWidth(40),
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    position: 'relative', // Added for proper overlay positioning
  },
  
  imageBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute', // Position image absolutely to fill the card
    top: 0,
    left: 0,
  },
  
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // black transparent overlay
    zIndex: 1, // Ensure overlay is above image
  },
  
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    zIndex: 2, // Ensure text is above overlay
  },
  
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  price: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 4,
  },
});