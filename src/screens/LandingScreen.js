import { 
  Text, 
  View, 
  TouchableOpacity, 
  SafeAreaView, 
  StyleSheet,
  Animated,
  Dimensions,
  Platform,
  Image
} from 'react-native';
import { Display } from '../utils';
import {Images} from '../constants'

const { width } = Dimensions.get('window');




export default function LandingScreen({navigation}) {


  return (
    <SafeAreaView style={styles.container}>
      
      
     

          <View style={styles.headerContainer}>
             <Image style={styles.image} source={Images.logo} resizeMode='contain'/>
            <Text style={styles.welcomeText}>Welcome to Shoperinto</Text>
            <Text style={styles.subtitleText}>Shop & get updates on new products, romotions and sales with our mobile app.</Text>
          </View>

          <View style={styles.authButtonsContainer}>
         <TouchableOpacity
                     style={styles.loginButton}
                     activeOpacity={0.8}
                     onPress={()=>{
                        navigation.navigate('SignIn')
                     }}
                   >
                     <Text style={styles.loginButtonText}>Login</Text>
                   </TouchableOpacity>
                    <TouchableOpacity
                     style={styles.signupButton}
                     activeOpacity={0.8}
                      onPress={()=>{
                        navigation.navigate('SignUp')
                     }}
                   >
                     <Text style={styles.signupButtonText}>SignUp</Text>
                   </TouchableOpacity>
          </View>
   

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  authContainer: {
    width: width * 0.9,
    maxWidth: 400,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  welcomeContainer: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 12,
  },
  subtitleText: {
    fontSize: 16,
    color: '#666',
    marginTop: 18,
    marginHorizontal:30,
    textAlign:'center',
  },
  authButtonsContainer: {
    gap: 16,
  },


   image:{
          height: Display.setHeight(10),
          width: Display.setWidth(20)
      },
       loginButton:{
        backgroundColor:"#333",

        paddingVertical:15,
        paddingHorizontal:60,
        borderRadius:26,
        justifyContent: "center",
        alignItems:"center",
        elevation: 2
    },
    loginButtonText:{
        color:"white",
        fontSize: 20,
        fontWeight:"bold",
    },
       signupButton:{
        borderColor:"#333",
        borderWidth:1,
        paddingVertical:15,
        paddingHorizontal:60,
        borderRadius:26,
        justifyContent: "center",
        alignItems:"center",
        elevation: 2
    },
    signupButtonText:{
        color:"#333",
        fontSize: 20,
        fontWeight:"bold",
    }
});
