import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Six-Week Courses</Text>


      <Text>Child Minding </Text>
      <Text>Cooking</Text>
      <Text>Garden Maintanance</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    title: {
    fontSize: 36,
    color: ' ',
    marginBottom: 24,
    textAlign: 'center',
  },

  text: {
    fontSize: 36,
    color: ' ',
    marginBottom: 24,
    textAlign: 'center',

  },

});


