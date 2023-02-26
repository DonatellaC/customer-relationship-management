import { View, Text } from "react-native";
import stylesFn from "./styles";

const ListOfCustomers = () => {
  const styles = stylesFn();

  return (
    <View style={styles.container}>
      <Text>List Of Customers</Text>
    </View>
  );
};

export default ListOfCustomers;
