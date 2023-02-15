import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/Welcome";
import NewScreen from "../screens/NewScreen";
import EditScreen from "../screens/EditScreen";
import ListByRegion from "../screens/ListByRegion";
import ListRegionsScreen from "../screens/ListRegionsScreen";
import ShowScreen from "../screens/ShowScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Welcome"}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="NewScreen" component={NewScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
        <Stack.Screen name="ListByRegion" component={ListByRegion} />
        <Stack.Screen
          name="ListRegions"
          component={ListRegionsScreen}
          title="Regions"
        />
        <Stack.Screen name="Show" component={ShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
