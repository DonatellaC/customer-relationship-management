import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import stylesFn from "./styles";

export default function ShowCustomerCard({ firstName, lastName, region }) {
  const styles = stylesFn();
  const navigation = useNavigation();

  const handleCustomerEdit = () => {
    navigation.navigate("Edit", { customerID: item.id });
  };

  return (
    <View style={styles.customerContainer}>
      <TouchableOpacity onPress={handleCustomerEdit}>
        <Text style={styles.customerDetails}>First Name: {firstName}</Text>
        <Text style={styles.customerDetails}>Last Name: {lastName}</Text>
        <Text style={styles.customerDetails}>Region: {region}</Text>
      </TouchableOpacity>
    </View>
  );
}
