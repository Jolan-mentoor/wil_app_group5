import React from 'react';
import { StatusBar, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const handleReadMore = () => {
    // Handle Read More action here
    console.log('Read More clicked');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Six Month Courses</Text>

        <Text style={styles.text}>First Aid</Text>
        <Image
          source={require('path_to_your_first_aid_image')} // Replace with the actual path to your image
          style={styles.image}
        />
        <TouchableOpacity onPress={handleReadMore}>
          <View style={styles.button}>
            <Text style={styles.btnText}>Read More</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.text}>Sewing</Text>
        <Image
          source={require('path_to_your_sewing_image')} // Replace with the actual path to your image
          style={styles.image}
        />
        <TouchableOpacity onPress={handleReadMore}>
          <View style={styles.button}>
            <Text style={styles.btnText}>Read More</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.text}>Landscaping</Text>
        <Image
          source={require('path_to_your_landscaping_image')} // Replace with the actual path to your image
          style={styles.image}
        />
        <TouchableOpacity onPress={handleReadMore}>
          <View style={styles.button}>
            <Text style={styles.btnText}>Read More</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.text}>Life Skills</Text>
        <Image
          source={require('path_to_your_life_skills_image')} // Replace with the actual path to your image
          style={styles.image}
        />
        <TouchableOpacity onPress={handleReadMore}>
          <View style={styles.button}>
            <Text style={styles.btnText}>Read More</Text>
          </View>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5E280B',
  },
  scrollView: {
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
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover', // Adjust the resizeMode as per your requirement
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
