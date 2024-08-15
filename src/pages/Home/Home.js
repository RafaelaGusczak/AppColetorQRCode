import React, { useContext } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../../contexts/Authentication';

export default function HomeScreen() {

    const { Logout } = useContext(AuthContext);

    function SignOut(e) {
      e.preventDefault();
      Logout()
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home</Text>
        <Button
        title='Logout'
        onPress={SignOut}
      />
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });