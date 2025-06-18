import { 
  View, 
  Text, 
  SafeAreaView, 
  StyleSheet, 
  StatusBar, 
  FlatList, 
  Animated, 
  Dimensions,
  ScrollView // Added ScrollView
} from 'react-native'
import React, { useRef } from 'react'
import { Categories, Header, Seperator } from '../components';
import { General } from '../constants';
import NewArrivals from './NewArrivals';
import Featured from './Featured';

const MainScreen = () => {
  const { width } = Dimensions.get('window');
  const CARD_WIDTH = width * 0.6;
  const CARD_HEIGHT = CARD_WIDTH * 1.2;
  
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor="#fff" translucent/>
      <Seperator height={StatusBar.currentHeight}/>
      <Header/>
      
      {/* Wrap everything in ScrollView */}
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        {/* CATEGORIES */}
        <View style={styles.section}>
          <FlatList
            data={General.CATEGORIES}
            keyExtractor={item => item.name}
            horizontal
            showsHorizontalScrollIndicator={false}
            overScrollMode='never'
            renderItem={({item}) => <Categories {...item}/>}
          />
        </View>

        {/* NEW ARRIVALS */}
        <View style={styles.section}>
          <Text style={styles.text}>New Arrivals</Text>
          <Animated.FlatList
            data={General.Products}
            keyExtractor={item => item.name}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={Dimensions.get('window').width * 0.6 + 20} 
            decelerationRate="fast"
            contentContainerStyle={{ paddingHorizontal: 10 }}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
            renderItem={({ item, index }) => {
              const inputRange = [
                (index - 1) * (CARD_WIDTH + 20),
                index * (CARD_WIDTH + 20),
                (index + 1) * (CARD_WIDTH + 20),
              ];
              
              const scale = scrollX.interpolate({
                inputRange,
                outputRange: [0.9, 0.95, 0.9],
                extrapolate: 'clamp',
              });
              
              return <NewArrivals {...item} scale={scale} />;
            }}
          />
        </View>

        {/* FEATURED */}
        <View style={styles.section}>
          <Text style={styles.text2}>Featured</Text>
          <FlatList
            data={General.Products}
            keyExtractor={item => item.name}
            horizontal
            showsHorizontalScrollIndicator={false}
            overScrollMode='never'
            renderItem={({item}) => <Featured {...item}/>}
          />
        </View>
        {/* Best Sellers */}
        <View style={styles.section}>
          <Text style={styles.text2}>Best Sellers</Text>
          <FlatList
            data={General.Products}
            keyExtractor={item => item.name}
            horizontal
            showsHorizontalScrollIndicator={false}
            overScrollMode='never'
            renderItem={({item}) => <Featured {...item}/>}
          />
        </View>
        {/* Add some bottom padding */}
        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  scrollView: {
    flex: 1,
  },
  
  section: {
    marginBottom: 12, // Fixed: removed 'px' - React Native uses numbers
  },
  
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: "#000",
    textAlign: "center",
    marginVertical: 22
  },
  
  text2: {
    fontSize: 26,
    fontWeight: 'bold',
    color: "#000", 
    textAlign: "left",
    marginVertical: 22,
    marginHorizontal: 22
  },
  
  bottomPadding: {
    height: 20, // Add some space at the bottom
  },
});

export default MainScreen