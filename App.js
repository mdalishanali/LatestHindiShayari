import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { COLORS, ROUTES } from "./src/constants/index";
import { Home, ListShayari } from "./src/screens";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      >
        <Stack.Screen
          name={ROUTES.HOME}
          component={Home}
          options={({ route }) => ({
            headerTintColor: COLORS.white,
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
