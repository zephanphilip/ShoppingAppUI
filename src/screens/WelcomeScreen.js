import { View, Text, StyleSheet, StatusBar,SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React,{useState,useRef} from 'react'
import { General } from '../constants';
import { Seperator, WelcomeCard } from '../components';
import { Display } from '../utils';

const pageStyle = isActive => 
    isActive ? styles.page : { ...styles.page, backgroundColor: "grey"}

const Pagination = ({index}) => {
    return (
        <View style={styles.pageContainer}>
            {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_,i) => 
            i === index ? (
            <View style={pageStyle(true)} key={i}/>
            ) : (
            <View style={pageStyle(false)} key={i}/>
            ),
            )}
            
        </View>
    )
}

export default function WelcomeScreen({navigation}) {
    const [welcomeListIndex,setWelcomeListIndex] = useState(0);
    const welcomeList = useRef();
    const onViewRef = useRef(({changed})=>{
        setWelcomeListIndex(changed[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

    const pageScroll = () => {
        welcomeList.current.scrollToIndex({
            index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex,
        });
    };

    const handlePress = () => {
        navigation.navigate('LandingScreen')
    }

  return (
     <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.welcomeListContainer}>
        <FlatList
          data={General.WELCOME_CONTENTS}
          ref={welcomeList}
          keyExtractor={(item) => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          overScrollMode="never"
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
          renderItem={({ item }) => <WelcomeCard {...item} />}
        />
      </View>
      <Pagination index={welcomeListIndex} />
      {welcomeListIndex === 7 ? (
        <View style={styles.startButtonContainer}>
          <TouchableOpacity
            style={styles.startButton}
            activeOpacity={0.8}
            onPress={handlePress}
          >
            <Text style={styles.startButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          {/* <TouchableOpacity onPress={() => welcomeList.current.scrollToEnd()}>
            <Text style={styles.skipButton}>SKIP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={pageScroll}>
            <Text style={styles.nextButtonText}>NEXT</Text>
          </TouchableOpacity> */}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    welcomeListContainer:{
        height: Display.setHeight(60),
    },
    container: {
      flex: 1,
      backgroundColor: "#333333",
      justifyContent: "center",
      alignItems: "center",
    },
    pageContainer: {
        flexDirection: "row"
    },
    page:{
        height:8,
        width:8,
        backgroundColor:"white",
        borderRadius:32,
        marginHorizontal:5,
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent: "space-between",
        width: Display.setWidth(80),
        position: "absolute",
        bottom: 50,
        alignItems:"center"
    }, 
    startButtonContainer:{
        justifyContent: "center",
        position: "absolute",
        bottom: 50,
        alignItems:"center"
    },
    button:{
        backgroundColor:"#c1eccc",
        paddingVertical:20,
        paddingHorizontal:11,
        borderRadius:32
    },
    startButton:{
        backgroundColor:"white",

        paddingVertical:5,
        paddingHorizontal:30,
        borderRadius:8,
        justifyContent: "center",
        alignItems:"center",
        elevation: 2
    },
    startButtonText:{
        color:"#333",
        fontSize: 20,
        fontWeight:"bold",
    }
  });