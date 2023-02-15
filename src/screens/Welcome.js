import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

export default function Welcome() {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>This is a Welcome screen!</Text>
      <TouchableOpacity
        onPress={() => {
          navigate("NewScreen");
        }}
      >
        <Text>See NewScreen</Text>
      </TouchableOpacity>
    </View>
  );
}
