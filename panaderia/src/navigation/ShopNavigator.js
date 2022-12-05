import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreens";
import BreadDetailsScreen from "../screens/BreadDetailsScreen";
import CategoryBreadScreen from "../screens/CategoryBreadScreen";
import { COLORS } from "../constants/COLORS";

const Stack = createNativeStackNavigator();
export default ShopNavigator = () =>{
    return(
        <Stack.Navigator
      initialRouteName="Categorias"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.secondary,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Categorias"
        component={CategoriesScreen}
        options={{
          title: "Mi Panaderia",
        }}
      />
      <Stack.Screen
        name="Bread"
        component={CategoryBreadScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="Details"
        component={BreadDetailsScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
    );
}