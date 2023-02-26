import React from "react";
import { View, Text, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import stylesFn from "./styles";
import ShowCustomerCard from "../../components/ShowCustomerCard";

const ListOfCustomers = () => {
  const route = useRoute();
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
    </View>
  );
};

export default ListOfCustomers;
