import react from 'react';
import { Text, View, StyleSheet,width,height,SafeAreaView,Image,TouchableOpacity,ScrollView } from "react-native";


function ContactScreen() {
    return (
      <ScrollView>
      <SafeAreaView style={styles.container}>
      {<Image style={styles.background} 
          source={require('../assets/img/nav.jpg')}
          resizeMode="cover"
          /> }
    <View style={[styles.background, styles.overflow]} />
  <View style={styles.content}>
  <View><Text style={styles.title2}>Contact{'\n'}Us</Text></View>
  <View><Text style={styles.Text14}>Contact Number: 084 7589 489</Text></View>
  <View><Text style={styles.Text14}>Email Address:  empoweringthenation@gmail.com</Text></View>
  <View><Text style={styles.Text14}>Physical Address1: 2nd Avenue, Newton Park,Gqeberha</Text></View>
  <View><Text style={styles.Text14}>Physical Address2: 2nd Avenue, Newton Park,Gqeberha</Text></View>
  
   
  <Image style={styles.background2} 
          source={require('../assets/map.png')}
          resizeMode="cover"
          /> 
  {/* <TouchableOpacity>
    <View style={styles.button2}>
      <Text style={styles.btnText2}>First Aid</Text>
     </View>
  </TouchableOpacity> */}
  <Image style={styles.background8} 
          source={require('../assets/map.png')}
          resizeMode="cover"
          />
  {/* <TouchableOpacity>
    <View style={styles.button3}>
      <Text style={styles.btnText3}>Life Skills</Text>
    </View>
  </TouchableOpacity> */}
  {/* <Image style={styles.background3} 
          source={require('../assets/img/sewing.png')}
          resizeMode="cover"
          />
          <TouchableOpacity>
    <View style={styles.button4}>
      <Text style={styles.btnText3}>Sewing</Text>
    </View>
  </TouchableOpacity>
  <Image style={styles.background3} 
          source={require('../assets/img/garden.png')}
          resizeMode="cover"
          />
           <TouchableOpacity>
    <View style={styles.button5}>
      <Text style={styles.btnText3}>LandScaping</Text>
    </View>
  </TouchableOpacity>

  <Image style={styles.background3} 
          source={require('../assets/img//Landscaping/garden.jpg')}
          resizeMode="cover"
          />
           <TouchableOpacity>
    <View style={styles.button5}>
      <Text style={styles.btnText3}>Garden Maintance</Text>
    </View>
  </TouchableOpacity>
  <Image style={styles.background3} 
          source={require('../assets/img/ChildMinding/child.jpg')}
          resizeMode="cover"
          />
           <TouchableOpacity>
    <View style={styles.button5}>
      <Text style={styles.btnText3}>Childminding</Text>
    </View>
  </TouchableOpacity>
  <Image style={styles.background3} 
          source={require('../assets/img/cooking.jpg')}
          resizeMode="cover"
          />
           <TouchableOpacity>
    <View style={styles.button5}>
      <Text style={styles.btnText3}>Cooking</Text>
    </View>
  </TouchableOpacity>
         */}
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
      borderRadius:0,
      marginBottom:50,
      marginTop:-60,
      marginLeft:10,
    },
  
    background3:{
      top: 0,
      left: 0,
      width:150,
      height:125,
      borderRadius:100,
      marginBottom:50,
    },

    background8:{
      top: 0,
      left: 0,
      width:150,
      height:125,
      borderRadius:0,
      marginBottom:50,
      marginLeft:210,
      marginTop:-170,
    },
  
  //pexel,2023//
  // IIE,2023//
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
      fontSize: 20,
      color:'#CEA792',
       marginBottom: 125,
        marginTop: -40,
      padding: 5,
      marginLeft:25,
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
  export default ContactScreen;