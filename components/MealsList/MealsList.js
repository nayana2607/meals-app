import { FlatList, StyleSheet, View } from "react-native";
import MealItems from "./MealItems";

function MealsList(props) {
  function renderMeals(itemData) {
    return <MealItems mealInfo={itemData.item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.displayedMeals}
        renderItem={renderMeals}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default MealsList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
