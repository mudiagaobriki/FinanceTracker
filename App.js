import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./src/screens/Home";
import BottomNavigation from "./src/navigation/BottomNavigation";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export default function App() {

  let persistor = persistStore(store);

  return (
    <>
      <Provider store={store}>
      <PersistGate persistor={persistor} >
        <BottomNavigation />
        <StatusBar style="auto" />
      </PersistGate>
      </Provider>
    </>
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
