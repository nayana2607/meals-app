import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  <Drawer.Navigator>
    <Drawer.Screen />
  </Drawer.Navigator>;
}
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          {/* screens bound by stack.screen gets a special prop provided by react navigation which can be pulled out destructuring later in compo definition */}
          <Stack.Screen
            name="Meals Categories"
            component={CategoriesScreen}
            options={{ title: "All Categories" }}
          />
          <Stack.Screen name="Meals Overview" component={MealsOverViewScreen} />
          <Stack.Screen name="Meal Details" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
  },
});
