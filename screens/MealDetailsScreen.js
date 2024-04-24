import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { addFavorites, removeFavorites } from "../store/redux/favoriteSlice";
// import { FavoritesContext } from "../store/context/favourites-context";

function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const favoriteMealsCtx = useContext(FavoritesContext);
  //const mealsIsFavorite = favoriteMealsCtx.ids.includes(mealId);
  const favoriteMealds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  const isMealFavorite = favoriteMealds.includes(mealId);

  useEffect(() => {
    navigation.setOptions({ title: selectedMeal.title });
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={handleHeaderPress}
            color="white"
            name={isMealFavorite ? "star" : "star-outline"}
          />
        );
      },
    });
  }, [mealId, navigation, handleHeaderPress]);

  function handleHeaderPress() {
    if (isMealFavorite) {
      // favoriteMealsCtx.removeFavorite(mealId)
      dispatch(removeFavorites({ id: mealId }));
    } else {
      //favoriteMealsCtx.addFavorite(mealId)
      dispatch(addFavorites({ id: mealId }));
    }
  }

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        textStyle={styles.detailText}
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />

      <View style={styles.lostOuterContainer}>
        <View style={styles.lisContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal.ingredients}></List>
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal.steps}></List>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;
const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    height: 350,
    width: "100%",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
    color: "white",
  },

  detailText: {
    color: "white",
  },

  lisContainer: {
    width: "80%",
  },

  lostOuterContainer: {
    alignItems: "center",
  },
});
