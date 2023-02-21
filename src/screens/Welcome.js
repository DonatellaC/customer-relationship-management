import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Button } from "../components/Button/Button";

export default function Welcome() {
  const { navigate } = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button onPress={() => navigate("Create")}>Create New Customer</Button>
      <Button onPress={() => navigate("Regions")}>Go to Regions</Button>
      <Button onPress={() => console.log("Delete database")}>
        Delete Database
      </Button>
    </View>
  );
}
