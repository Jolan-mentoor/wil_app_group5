import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.background}>
        
          <Text style={styles.title}>Six-Week Courses</Text>

          <Image
            source={require('')} // Replace with the actual path to your image
            style={styles.image}
          />

          <Text style={styles.text}>Child Minding</Text>

          <Image
            source={require(' ')} // Replace with the actual path to your image
            style={styles.image}
          />
                    <TouchableOpacity onPress={handleReadMore}>
            <View style={styles.button}>
              <Text style={styles.btnText}>Read More</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.text}>Cooking</Text>

          <Image
            source={require(' ')} // Replace with the actual path to your image
            style={styles.image}
          />
                    <TouchableOpacity onPress={handleReadMore}>
            <View style={styles.button}>
              <Text style={styles.btnText}>Read More </Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.text}>Garden Maintenance</Text>

          <Image
            source={require(' ')} // Replace with the actual path to your image
            style={styles.image}
          />
          <TouchableOpacity onPress={handleReadMore}>
           <View style={styles.button}>
               <Text style={styles.btnText}>Read More</Text>
            </View>
          </TouchableOpacity>
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

  btnText: {
    fontSize: 24,
    color: '#C8A2C8',
    fontWeight: '700',
  },

  button: {
    padding: 16,
    backgroundColor: 'black',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 20,
  },


});


