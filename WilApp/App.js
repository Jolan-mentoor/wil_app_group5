import { Text, View, StyleSheet,width,height,SafeAreaView,Image,TouchableOpacity,ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BookingScreen from "./Screens/BookingScreen";
import SixMonthsScreen from "./Screens/SixMonths";
import SixWeeksScreen from "./Screens/SixWeeks";
import HomeScreen from "./Screens/Home";



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
          options={{ tabBarIcon: makeIconRender("alpha-s-circle-outline") ,headerShown:false}}
        />

        <Tab.Screen
          name="SixWeek"
          component={SixWeeksScreen}
          options={{ tabBarIcon: makeIconRender("alpha-s-circle") ,headerShown:false}}
        />

      <Tab.Screen
          name="Booking"
          component={BookingScreen}
          options={{ tabBarIcon: makeIconRender("book") ,headerShown:false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5E280B',
  },

  background: {
   position: 'absolute',
    top: 0,
    left: 0,
    height: 150,
   
  },

  background2:{
    top: 0,
    left: 0,
    width:150,
    height:125,
    borderRadius:100,
    marginBottom:50,
    marginTop:-60,
  },

  background3:{
    top: 0,
    left: 0,
    width:150,
    height:125,
    borderRadius:100,
    marginBottom:50,
  },
//IIE,2023//
  overflow:{
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  content:{
    
    alignItems:'flex-start',
    paddingHorizontal:14,
  },

  title: {
    fontSize: 40,
    color:'#CEA792',
     marginTop: 100,
    textAlign: 'center',
    alignItems:'center',
     padding:80,
     marginLeft: 30,
    
    
  },
  title2:{
    fontSize: 40,
    color:'#CEA792',
     marginTop: 100,
    textAlign: 'center',
    alignItems:'center',
     padding:80,
     marginLeft: 30,
  },

  btnText:{
    fontSize: 24,
    color:'#D5b195',
    fontWeight:'500',
  },

  button:{
    padding:16,
    backgroundColor:'#765341',
    alignItems:'center',
    borderRadius: 35,
     marginBottom:20,
    marginLeft:110,
  },
  // Text:{
  //   fontSize: 20,
  //   color: '#CEA792',
  //   textAlign:'center',
  //   padding: 28,
  //    marginBottom: 10,
  //   marginTop:-150,
  //   marginLeft:50,
    
  // },

  Text2:{
    fontSize: 16,
    color:'#CEA792',
    textAlign:'center',
    padding: 0,
     marginLeft: 15,
     marginBottom:100,
     marginTop:-90,
    
    
  },

  Text3:{
    fontSize: 15,
    color:'#CEA792',
    textAlign:'center',
    padding: 5,
    marginLeft: 15,
       marginBottom: 150,
       marginTop: -80,
  },

  Text4:{
    fontSize: 15,
    color:'#CEA792',
     marginBottom: 125,
      marginTop: -100,
    padding: 5,
    textAlign:'center',

  },

  Text5:{
    fontSize: 15,
    color:'#D5b195',
     marginBottom: 80,
     marginTop: -70,
    padding: 2,

  },

  Text6:{
    fontSize: 35,
    color:'#D5b195',
      marginBottom: 100,
      marginTop: -80,
    padding: 2,
    marginLeft: 90,

  },
  Text7:{
    fontSize: 15,
    color:'#D5b195',
     marginBottom:15,
     marginTop:-10,
    
  },
  Text8:{
    fontSize: 15,
    color:'#D5b195',
    marginBottom:5,
  },
  Text9:{
    fontSize: 16,
    color:'#CEA792',
     marginBottom: 125,
      marginTop: -100,
      marginLeft:15,
    padding: 5,
    textAlign:'center',

  },
  Text10:{
    fontSize: 16,
    color:'#CEA792',
     marginBottom: 125,
      marginTop: -50,
    padding: 5,
    marginLeft:15,
    textAlign:'center',

  },

  Text11:{
    fontSize: 16,
    color:'#CEA792',
     marginBottom: 115,
      marginTop: -90,
    padding: 5,
    marginLeft:15,
    textAlign:'center',

  },

  Text12:{
    fontSize: 16,
    color:'#CEA792',
     marginBottom: 125,
      marginTop: -70,
    padding: 5,
    marginLeft:15,
    textAlign:'center',

  },

  button2:{
    padding:16,
    backgroundColor:'#765341',
    alignItems:'center',
    borderRadius: 35,
    marginBottom:15,
    marginLeft:250,
    marginTop:-130,
  },

  button3:{
    padding:16,
    backgroundColor:'#765341',
    alignItems:'center',
    borderRadius: 35,
    marginBottom:5,
    marginLeft:250,
    marginTop: -130,
  },

  button4:{
    padding:16,
    backgroundColor:'#765341',
    alignItems:'center',
    borderRadius: 35,
    marginBottom:5,
    marginLeft:250,
    marginTop: -130,
  },

  button5:{
    padding:16,
    backgroundColor:'#765341',
    alignItems:'center',
    borderRadius: 35,
    marginBottom:5,
    marginLeft:250,
    marginTop: -130,
  },


  

  btnText2:{
    fontSize:15,
    color:'#D5b195',
    fontWeight:'500',
  },

  btnText3:{
    fontSize: 15,
    color:'#D5b195',
    fontWeight:'500',
  },

});
//IIE,2023 Mobile Application Scripting MAST5112[POE]The inedpendent institute of education:unpublished//