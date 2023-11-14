import React from 'react';
import { StatusBar, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
{
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
          source={require('')} // Replace with the actual path to your image
          style={styles.image}
        />
        <TouchableOpacity onPress={handleReadMore}>
          <View style={styles.button}>
            <Text style={styles.btnText}>Read More</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.text}>Landscaping</Text>
        <Image
          source={require('')} // Replace with the actual path to your image
          style={styles.image}
        />
        <TouchableOpacity onPress={handleReadMore}>
          <View style={styles.button}>
            <Text style={styles.btnText}>Read More</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.text}>Life Skills</Text>
        <Image
          source={require('')} // Replace with the actual path to your image
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



