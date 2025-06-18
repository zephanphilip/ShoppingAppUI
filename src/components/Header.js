import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Images } from '../constants'


export default function Header() {

  return (
     <View style={styles.header}>
        <Image 
                source={Images.setti}
                style={styles.settiIcon}
              />
            <Text style={styles.logoText}>Shoperinto</Text>
            <Image 
                source={Images.cart}
                style={styles.profileIcon}
              />
          </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    paddingHorizontal:15,
    paddingVertical:16
  },
  profileIcon: {
    width:40,
    height: 40,
    padding:1
  },
  settiIcon: {
    width: 30,
    height: 30,
  },
  logoText: {
    fontSize: 26,
    fontWeight: 'bold',
    color:"#000"
  }
})