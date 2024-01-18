import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "../../screens/Splash";
import LoginScreen from "../../screens/LoginScreen";
import OfficerHome from "../../screens/OfficerHome";
import OICHome from "../../screens/OICHome";

const Stack = createNativeStackNavigator();
function Router(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          options={{ headerShown: false }}
          component={Splash}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="OHome"
          options={{ headerShown: false }}
          component={OfficerHome}
        />
        <Stack.Screen
          name="OICHome"
          options={{ headerShown: false }}
          component={OICHome}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
