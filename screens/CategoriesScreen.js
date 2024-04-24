import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

//navigation prop here is provide by react navigation bound by stack.screem
function CategoriesScreen({ navigation }) {
  function renderItem(itemData) {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler.bind(this, itemData)}
      />
    );
  }

  function pressHandler(itemData) {
    // navigate method takes second parameter which is an object which can be passed to the screen that is supposed to be loaded
    navigation.navigate("Meals Overview", {
      categoryId: itemData.item.id,
    });
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
