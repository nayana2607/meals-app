import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
// import { useContext } from "react";
// import { FavoritesContext } from "../store/context/favourites-context";

import MealsList from "../components/MealsList/MealsList";
import { useSelector } from "react-redux";

function FavoriteScreen() {
  // const favoriteMealsCtx = useContext(FavoritesContext);

  const favouriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favmeal = MEALS.filter((meal) =>
    //favoriteMealsCtx.ids.includes(meal.id)
    favouriteMealIds.includes(meal.id)
  );

  if (favmeal.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet:( </Text>
        <Text style={styles.text}>Go on Checkout and add some!!</Text>
      </View>
    );
  }
  return <MealsList displayedMeals={favmeal} />;
}

export default FavoriteScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
