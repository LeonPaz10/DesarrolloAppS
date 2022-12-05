
import {useFonts} from "expo-font"
import ShopNavigator from "./src/navigation/ShopNavigator"
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";

export default function App() {
  const[fontsLoaded]=useFonts({
    roboto : require("./src/assets/fonts/RobotoMono-VariableFont_wght.ttf")
  });

  if(!fontsLoaded){
    return null;
  };

  return <BottomTabNavigator />;
 
}


