import React, { useState, useContext } from 'react';
import { stylesLogin } from './stylesLogin';
import { View, Button, Text, TextInput } from 'react-native';
import { AuthContext } from '../../contexts/Authentication';

export default function LoginScreen() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const { SignIn } = useContext(AuthContext)

  function handleSubmit(e) {
    e.preventDefault();
    SignIn(email, senha)
  }

  return (


    <View style={{ flex: 1, alignItems: 'center', justifyContent: "center", color: "white" }}>
      <View style={stylesLogin.container}>
        <View style={stylesLogin.forms}>
          <View style={stylesLogin.input}>
            <Text style={stylesLogin.text}>Email:</Text>
            <TextInput
              placeholder={'Digite seu email'}
              onChangeText={setEmail}
            />
          </View>
          <View style={stylesLogin.input}>
            <Text style={stylesLogin.text}>Senha:</Text>
            <TextInput
              secureTextEntry={true}
              placeholder={'Digite sua senha'}
              onChangeText={setSenha}
            />
          </View>
        </View>
        <View style={stylesLogin.con_buttons}>
          <Button
            title='Entrar'
            onPress={handleSubmit}
          />
          <Button
            title='Cadastre-se'
            onPress={handleSubmit}
          />
        </View>
      </View>
    </View>
  )
}

