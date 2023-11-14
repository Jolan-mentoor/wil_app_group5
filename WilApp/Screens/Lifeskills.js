import react from 'react';
import { Text, View, StyleSheet,width,height,SafeAreaView,Image,TouchableOpacity,ScrollView } from "react-native";


function LifeskillsScreen() {
    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
        {<Image style={styles.background} 
            source={require('../assets/img/nav.jpg')}
            resizeMode="cover"
            /> }
      <View style={[styles.background, styles.overflow]} />
    <View style={styles.content}>
    <View><Text style={styles.title2}>Our{'\n'}Land scaping{'\n'}Course</Text></View>
    <View><Text style={styles.Text14}>This course provide landscaping services for new and established gardens:</Text></View>
      {/* <View><Text style={styles.Text9}>Whether you're enhancing your career or pursuing a passion, our courses provide a structured path to success. Join us for six months of immersive education, expert guidance, and a step towards realizing your goals.</Text></View> */}
    {/* <View><Text style={styles.Text5}></Text></View> 
    <View><Text style={styles.Text6}> </Text></View>  */}
    
    <Image style={styles.background4} 
            source={require('../assets/img/Landscaping/forest.jpg')}
            resizeMode="cover"
            /> 
    <TouchableOpacity>
      <View style={styles.button6}>
        <Text style={styles.btnText2}>indigenous and exotic plants and trees</Text>
       </View>
    </TouchableOpacity>
    <Image style={styles.background4} 
            source={require('../assets/img/Landscaping/garden.jpg')}
            resizeMode="cover"
            />
    <TouchableOpacity>
      <View style={styles.button6}>
        <Text style={styles.btnText3}>
        Balancing of plant and trees in a garden</Text>
      </View>
    </TouchableOpacity>
    <Image style={styles.background4} 
            source={require('../assets/img/Landscaping/pavement.jpg')}
            resizeMode="cover"
            />
            <TouchableOpacity>
      <View style={styles.button6}>
        <Text style={styles.btnText3}>Fixed structures (fountains, statues, benches, tables, built-in braai)</Text>
      </View>
    </TouchableOpacity>
    <Image style={styles.background4} 
            source={require('../assets/img/Landscaping/skills.jpg')}
            resizeMode="cover"
            />
             <TouchableOpacity>
      <View style={styles.button6}>
        <Text style={styles.btnText3}>Aesthetics of plant shapes and colours

</Text>
      </View>
    </TouchableOpacity>
  
    <Image style={styles.background4} 
            source={require('../assets/img/Landscaping/stream.jpg')}
            resizeMode="cover"
            />
             <TouchableOpacity>
      <View style={styles.button6}>
        <Text style={styles.btnText3}>Garden layout</Text>
      </View>
    </TouchableOpacity>
    <Image style={styles.background5} 
            source={require('../assets/img/Landscaping/nature.jpg')}
            resizeMode="cover"
            />
             <TouchableOpacity>
      <View style={styles.button7}>
        <Text style={styles.btnText4}>Book Now!!</Text>
      </View>
    </TouchableOpacity>     
    </View>
    
    
        </SafeAreaView>
        </ScrollView>
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

    background4:{
      top: 0,
      left: 0,
      width:120,
      height:120,
      borderRadius:100,
      marginBottom:50,
    },

    background5:{
      top: 0,
      left: 0,
      width:150,
      height:150,
      // borderRadius:100,
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
      color:'#CEA792',
       marginBottom: 80,
       marginTop: -70,
      padding: 2,
  
    },
  
    Text6:{
      fontSize: 35,
      color:'#CEA792',
        marginBottom: 100,
        marginTop: -80,
      padding: 2,
      marginLeft: 90,
  
    },
    Text7:{
      fontSize: 15,
      color:'#CEA792',
       marginBottom:15,
       marginTop:-10,
      
    },
    Text8:{
      fontSize: 15,
      color:'#CEA792',
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

    Text13:{
      fontSize: 25,
      color:'#CEA792',
       marginBottom: 125,
        marginTop: -70,
      padding: 5,
      marginLeft:15,
      textAlign:'center',
  
    },

    Text14:{
      fontSize: 15,
      color:'#CEA792',
       marginBottom: 50,
        marginTop: -50,
      padding: 5,
      marginLeft:0,
      textAlign:'center',
  
    },

    Text15:{
      fontSize: 25,
      color:'#CEA792',
       marginBottom: 125,
        marginTop: -70,
      padding: 5,
      marginLeft:15,
      textAlign:'center',
  
    },

    Text16:{
      fontSize: 25,
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

    button6:{
      padding:16,
      backgroundColor:'#5E280B',
      alignItems:'center',
      borderRadius: 35,
      marginBottom:5,
      marginLeft:250,
      marginTop: -150,
    },

    button7:{
      padding:26,
      backgroundColor:'#8F4F2A',
      alignItems:'center',
      // borderRadius: 35,
      marginBottom:5,
      marginLeft:250,
      marginTop: -180,
    },
  
  
    btnText2:{
      fontSize:15,
      color:'#CEA792',
      fontWeight:'500',
    },
  
    btnText3:{
      fontSize: 15,
      color:'#CEA792',
      fontWeight:'500',
    },

    btnText4:{
      fontSize: 25,
      color:'#CEA792',
      fontWeight:'500',
    },
  
  });
  
  export default LifeskillsScreen;