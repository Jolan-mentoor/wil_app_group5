import react from 'react';
import { Text, View, StyleSheet,width,height,SafeAreaView,Image,TouchableOpacity,ScrollView } from "react-native";


function HomeScreen() {
    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
        {<Image style={styles.background} 
            source={require('../assets/img/nav.jpg')}
            resizeMode="cover"
            /> }
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
            source={require('../assets/img/success.png')}
            resizeMode="cover"
            /> 
    <TouchableOpacity>
      <View style={styles.button2}>
        <Text style={styles.btnText2}>Six Months</Text>
       </View>
    </TouchableOpacity>
    <Image style={styles.background3} 
            source={require('../assets/img/helping-each-other-.jpg')}
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

  export default HomeScreen;