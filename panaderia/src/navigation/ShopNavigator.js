import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import categoriesScreen from "../screens/CategoriesScreens";
import BreadDetailsScreen from "../screens/BreadDetailsScreen";
import CategoryBreadScreen from "../screens/CategoryBreadScreen";

const Stack = createNativeStackNavigator();
export default ShopNavigator = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Categorias" component={categoriesScreen}/>
                <Stack.Screen name="Bread" component={CategoryBreadScreen}/>
                <Stack.Screen name="Details" component={BreadDetailsScreen}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}