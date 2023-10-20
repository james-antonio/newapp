import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='red'/>
      <View style={styles.messageContent}>
        <Text style={styles.messageText}>No Network Connection!</Text>
      </View> 
      <View style={styles.toolbarSpace}>
        <Text>ANTONIO</Text>
      </View>
      <View style={styles.inputMethod}>
        <Text>FIND A NETWORK!</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    
    //justifyContent: 'center',
  },
  messageContent: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputMethod: {
    flex: 1, 
    backgroundColor: 'white',
  },
  toolbarSpace: {
    borderTopWidth: 1, 
    borderTopColor: 'rgba(0,0,0,0.04)',
    backgroundColor: 'white',
  },
  messageText: {
    marginTop: 50,
    padding: 10,
    alignSelf: 'center',
   justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 20,
  }
});