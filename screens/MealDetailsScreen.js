import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useEffect, useState } from "react";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

function MealDetailsScreen({ route, navigation }) {
  const [iconColor, seticonColor] = useState("black");
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  useEffect(() => {
    navigation.setOptions({ title: selectedMeal.title });
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPress={handleHeaderPress} color={iconColor} />;
      },
    });
  }, [mealId, navigation, handleHeaderPress]);

  function handleHeaderPress() {
    seticonColor("white");
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
