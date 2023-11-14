import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.background}>
        
          <Text style={styles.title}>Sewing </Text>

          

          <Text style={styles.text}>Add Sewing text and information</Text> 


          

          

          
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5E280B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    color: '#CEA792',
    marginBottom: 24,
    textAlign: 'center',
  },

  text: {
    fontSize: 24,
    color: '#CEA792',
    marginBottom: 24,
    textAlign: 'center',

  },
  background: {
    width: width,
    height: height,
  },

  image: {
    width: 200, // Set the width of the image
    height: 200, // Set the height of the image
    resizeMode: ' ', // Choose the resizeMode as per your requirement
    marginBottom: 24,
  },


});