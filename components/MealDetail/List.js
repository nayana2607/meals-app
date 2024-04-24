import { Text, View, StyleSheet } from "react-native";

function List(props) {
  return props.data.map((dataPoint, index) => (
    <View style={styles.container} key={index}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}
export default List;
const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },

  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
