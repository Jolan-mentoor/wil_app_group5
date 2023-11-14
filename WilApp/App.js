import { Text, View, StyleSheet,width,height,SafeAreaView,Image,TouchableOpacity,ScrollView } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BookingScreen from "./Screens/BookingScreen";
import SixMonthsScreen from "./Screens/SixMonths";
import SixWeeksScreen from "./Screens/SixWeeks";
import HomeScreen from "./Screens/Home";
import FirstAidScreen from "./Screens/FirstAid";
import GardenScreen from "./Screens/Garden";
import ContactScreen from "./Screens/Contact";
import ChildMindingScreen from "./Screens/ChildMindingScreen";
import LifeskillScreen from "./Screens/Lifeskills";
import SewingScreen from "./Screens/Sewing";
import CookingScreen from "./Screens/Cooking";
import LandscapingScreen from "./Screens/Landscaping";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarIcon: makeIconRender("home") ,headerShown:false }}
        />
        <Tab.Screen
          name="SixMonth"
          component={SixMonthsScreen}
          options={{ tabBarIcon: makeIconRender("arrow-right") ,headerShown:false}}
        />

        <Tab.Screen
          name="SixWeek"
          component={SixWeeksScreen}
          options={{ tabBarIcon: makeIconRender("arrow-right") ,headerShown:false}}
        />

     
      <Tab.Screen
          name="FirstAid"
          component={FirstAidScreen}
          options={{ tabBarIcon: makeIconRender("first-aid") ,headerShown:false}}
        />
        <Tab.Screen
          name="ChildMinding"
          component={ChildMindingScreen}
          options={{ tabBarIcon: makeIconRender("baby-carriage") ,headerShown:false}}
        />
        <Tab.Screen
          name="Cooking"
          component={CookingScreen}
          options={{ tabBarIcon: makeIconRender("hamburger") ,headerShown:false}}
        />
        <Tab.Screen
          name="Sewing"
          component={SewingScreen}
          options={{ tabBarIcon: makeIconRender("ruler") ,headerShown:false}}
        />
        <Tab.Screen
          name="Landscaping"
          component={LandscapingScreen}
          options={{ tabBarIcon: makeIconRender("screwdriver") ,headerShown:false}}
        />

      <Tab.Screen
          name="Garden Maintance"
          component={GardenScreen}
          options={{ tabBarIcon: makeIconRender("seedling") ,headerShown:false}}
        />
        <Tab.Screen
          name="Life Skills"
          component={LifeskillScreen}
          options={{ tabBarIcon: makeIconRender("chart-line") ,headerShown:false}}
        />

        <Tab.Screen
          name="Booking"
          component={BookingScreen}
          options={{ tabBarIcon: makeIconRender("book") ,headerShown:false}}
        />

         <Tab.Screen
          name="Contact"
          component={ContactScreen}
          options={{ tabBarIcon: makeIconRender("phone") ,headerShown:false}}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function makeIconRender(name) {
  return ({ color, size }) => (
    <FontAwesome5 name={name} color={color} size={size} />
  );
}


//IIE,2023 Mobile Application Scripting MAST5112[POE]The inedpendent institute of education:unpublished//
//(2023) 4.2 million+ stunning free images to use anywhere - pixabay - pixabay. Available at: https://pixabay.com/ (Accessed: 14 November 2023). //
//The Collaborative Interface Design Tool (n2023) Figma. Available at: https://www.figma.com/ (Accessed: 14 November 2023). //
//Expo (2023) Expo/examples: Example projects that demonstrate how to use EXPO apis and Integrate Expo with other popular tools, GitHub. Available at: https://github.com/expo/examples/ (Accessed: 14 November 2023). //
//Where developers learn, share, &amp; build careers (2023) Stack Overflow. Available at: https://stackoverflow.com/ (Accessed: 14 November 2023). //