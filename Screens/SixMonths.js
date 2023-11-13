import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Six Month Courses</Text>
      

      <Text style={styles.text}>First Aid</Text>


      <Text style={styles.text}>Sewing</Text>


      <Text style={styles.text}>Landscaping</Text>

      <Text style={style.text}>Life Skills</Text>


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