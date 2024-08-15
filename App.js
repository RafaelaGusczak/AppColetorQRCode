import { StyleSheet } from "react-native";
import * as React from "react"
import StackNavigation from "./src/routes/StackNavigation";
import AuthProvider from "./src/contexts/Authentication";

export default function App() {

  return (
    <AuthProvider>
      <StackNavigation/>
    </AuthProvider>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



