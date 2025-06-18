import React from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { WelcomeScreen,LandingScreen, SignIn, SignUp, MainScreen } from "../screens";


const Stack = createStackNavigator();

const Navigators = () => {
  const navigationRef = useNavigationContainerRef();
  
  
  return (
    <NavigationContainer
      ref={navigationRef}
    >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="LandingScreen" component={LandingScreen} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="MainScreen" component={MainScreen}/>
        </Stack.Navigator>

    </NavigationContainer>
  );
};


export default Navigators;
