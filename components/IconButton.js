import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton(props) {
  return (
    <Pressable onPress={props.onPress}>
      <Ionicons name="star" size={24} color={props.color} />
    </Pressable>
  );
}

export default IconButton;
