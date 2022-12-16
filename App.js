import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { COLORS, ROUTES } from "./src/constants/index";
import { Home, ListShayari } from "./src/screens";
const Stack = createNativeStackNavigator();

const MyTheme = {
  colors: {
    background: COLORS.primary,
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar style="light" backgroundColor={COLORS.statusbar} />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.secondery,
          },
          headerTintColor: COLORS.white,
        }}
      >
        <Stack.Screen
          name={ROUTES.HOME}
          component={Home}
          options={({ route }) => ({
            title: "Latest Hindi Shayari",
          })}
        />
        <Stack.Screen
          name={ROUTES.ListShayari}
          component={ListShayari}
          options={({ route }) => ({
            title: route.params.category,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
