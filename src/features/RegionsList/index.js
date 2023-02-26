import { View, Text } from "react-native";
import stylesFn from "./styles";
import regions from "../../utilities/regions";
import { Button } from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";

const RegionsList = () => {
  const styles = stylesFn();
  const navigation = useNavigation();

  const handleRegionSelect = (region) => {
    navigation.navigate("Customers By Region", { region });
  };

  return (
    <View style={styles.container}>
      <Text>Please select a region</Text>
      {regions.map((region, index) => {
        return (
          <Button
            key={index}
            onPress={() => handleRegionSelect(region)}
            text={region}
          />
        );
      })}
    </View>
  );
};

export default RegionsList;
