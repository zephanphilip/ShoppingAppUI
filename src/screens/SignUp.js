import { 
  Text, 
  View, 
  TouchableOpacity, 
  SafeAreaView, 
  StyleSheet,
  Dimensions,
  TextInput,
  Platform
} from 'react-native';



export default function SignUp({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.welcomeText}>Sign Up</Text>
      </View>

      {/* Email and Password Inputs */}
      <View style={styles.authContainer}>
        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#999"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
         <TextInput
          placeholder="Phone Number"
          placeholderTextColor="#999"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
         <TextInput
          placeholder="Email Address"
          placeholderTextColor="#999"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          style={styles.input}
          secureTextEntry
        />
      </View>

     
      <View style={styles.authButtonsContainer}>
        <TouchableOpacity
          style={styles.fbButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('MainScreen')}
        >
          <Text style={styles.fbButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 22,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'flex-start',
    marginVertical: 22,
    marginHorizontal:22
  },
  or:{
    fontWeight:"bold",
     fontSize: 18,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 12,
    textAlign: 'left',
  },
  authContainer: {
    width: '100%',

    borderRadius: 20,
    padding: 24,


    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    color: '#333',
  },
  authButtonsContainer: {
    alignItems: 'center',
    gap: 56,
    marginHorizontal:22

  },
  loginButton: {
    width:"100%",
    backgroundColor: "#333",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  loginButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  }, fbButton: {
     width:"100%",
    backgroundColor: "#344d91",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  fbButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

});
