import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Six-Week Courses</Text>


      <Text style={styles.text}>Child Minding </Text>


      <Text style={styles.text}>Cooking</Text>


      <Text style={styles.text}>Garden Maintanance</Text>


      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '5E280B',
    alignItems: 'center',
    justifyContent: 'center',
  },
    title: {
    fontSize: 36,
    color: 'CEA792',
    marginBottom: 24,
    textAlign: 'center',
  },

  text: {
    fontSize: 36,
    color: 'CEA792',
    marginBottom: 24,
    textAlign: 'center',

  },

});


