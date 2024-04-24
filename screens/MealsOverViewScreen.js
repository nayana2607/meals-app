import { StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
//import { useRoute } from "@react-navigation/native";

//route is recieved as a parameter alongwith navigation when the screen is register as component in <stack.screen>
function MealsOverViewScreen({ route, navigation }) {
  /*using params object of route prop
   we can extract the data which 
   passed through navigation object from a different screen 
-------------------------------------------------------------------
  /* Below hook provided by navigation native to extarct the route 
regardless of compo/screen 
 regiestered as screen in  <screen.navigator>*/

  // const route=useRoute()

  useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(categoryId);
  });

  return <MealsList displayedMeals={displayedMeals} />;
}
export default MealsOverViewScreen;
const styles = StyleSheet.create({});
