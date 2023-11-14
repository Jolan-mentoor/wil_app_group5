import { Text, View, StyleSheet,width,height,SafeAreaView,Image,TouchableOpacity,ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function HomeScreen() {
  return (
      <ScrollView>
      <SafeAreaView style={styles.container}>
      {/* <Image style={styles.background} 
          source={require('./assets/img/bg.jpg')}
          resizeMode="cover"
          /> */}
    <View style={[styles.background, styles.overflow]} />
  <View style={styles.content}>
  <View><Text style={styles.title}>Welcome {'\n'}</Text></View>
  {/* <View><Text style={styles.Text}>Empowering the nation</Text></View> */}
  <View><Text style={styles.Text2}>"Empowering the Nation is your gateway to personal and collective growth! We believe in fostering strength, resilience, and progress for individuals and communities.{'\n'} Explore our diverse range of programs, resources, and initiatives designed to empower you and contribute to the advancement of our nation. Join us in building a stronger,
                   more empowered future for all.{'\n'} Together, let's unleash the potential within ourselves and our nation.</Text></View>
  <View><Text style={styles.Text3}>At Empowering the Nation, we provide skill training for domestic workers and gardeners, helping them upskill themselves to become more marketable when seeking employment or pursuing entrepreneurship. Additionally, we offer courses tailored for elders and members of the community, enabling them to enhance their skills and stay competitive in the job market. Our goal is to support individuals in their journey towards personal and professional development, ultimately contributing to the overall progress of our nation."
                  </Text></View>
   {/* <View><Text style={styles.Text4}></Text></View>
  <View><Text style={styles.Text5}></Text></View> */}
  <View><Text style={styles.Text6}> Our courses</Text></View> 
  <Image style={styles.background2} 
          source={require('./assets/img/success.png')}
          resizeMode="cover"
          /> 
  <TouchableOpacity>
    <View style={styles.button2}>
      <Text style={styles.btnText2}>Six Months</Text>
     </View>
  </TouchableOpacity>
  <Image style={styles.background3} 
          source={require('./assets/img/helping-each-other-.jpg')}
          resizeMode="cover"
          />
  <TouchableOpacity>
    <View style={styles.button3}>
      <Text style={styles.btnText3}>Six Weeks</Text>
    </View>
  </TouchableOpacity>
        {/* <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.btnText}>Continue</Text>
          </View>
  
        </TouchableOpacity> */}
  </View>
  
  
      </SafeAreaView>
      </ScrollView>
    );
 
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarIcon: makeIconRender("home") }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ tabBarIcon: makeIconRender("cog") }}
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
    width: width,
    height: height,
   
  },

  background2:{
    top: 0,
    left: 0,
    width:150,
    height:125,
    borderRadius:100,
    marginBottom:50,
  },

  background3:{
    top: 0,
    left: 0,
    width:150,
    height:125,
    borderRadius:100,
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
     marginTop: 5,
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
    fontSize: 18,
    color:'#CEA792',
    textAlign:'center',
    padding: 0,
    marginLeft: 15,
     marginBottom:90,
     marginTop:-90,
    
    
  },

  Text3:{
    fontSize: 18,
    color:'#D5b195',
    textAlign:'center',
    padding: 5,
    marginLeft: 15,
       marginBottom: 150,
       marginTop: -80,
  },

  Text4:{
    fontSize: 15,
    color:'#D5b195',
     marginBottom: 115,
      marginTop: -100,
    padding: 2,

  },

  Text5:{
    fontSize: 15,
    color:'#D5b195',
     marginBottom: 80,
     marginTop: -70,
    padding: 2,

  },

  Text6:{
    fontSize: 30,
    color:'#D5b195',
      marginBottom: 40,
      marginTop: -100,
    padding: 2,
    marginLeft: 110,

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
    marginTop: -90,
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