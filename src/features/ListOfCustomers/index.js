import React from "react";
import { View, Text, FlatList } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import stylesFn from "./styles";
import ShowCustomerCard from "../../components/ShowCustomerCard";
import { Button } from "../../components/Button/Button";

const ListOfCustomers = () => {
  const route = useRoute();
  const { navigate } = useNavigation();
  const styles = stylesFn();
  const { region, filteredCustomers } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Customers in {region}</Text>
      {filteredCustomers.length > 0 ? (
        <FlatList
          data={filteredCustomers}
          keyExtractor={(customer) => customer.id.toString()}
          renderItem={({ item: customer }) => (
            <ShowCustomerCard
              onPress={() => onPress(customer)}
              firstName={customer.firstName}
              lastName={customer.lastName}
              region={customer.region}
            />
          )}
        />
      ) : (
        <Text style={styles.noCustomers}>No customers in {region}</Text>
      )}
      <Button
        onPress={() => navigate("Create")}
        text="Create New Customer"
      ></Button>
    </View>
  );
};

export default ListOfCustomers;
