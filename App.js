import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./src/screens/Home";
import BottomNavigation from "./src/navigation/BottomNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      {/*<Text>Mudi</Text>*/}
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
});
