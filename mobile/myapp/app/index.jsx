import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Link } from 'expo-router';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const verificacaoLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('ERRO', 'Todos os campos devem estar preenchidos.');
    } else {
      Alert.alert('Login', `Bem-vindo, ${email}!`);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>BEM-VINDO</Text>
     
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
     
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
     
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={verificacaoLogin} color="#236bcb" />
      </View>


      <Link style={styles.buttonLink} href='/Registro'>Cadastre-se</Link>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
    borderRadius: 8,
  },
  buttonLink: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    width: '100%',
  },
});


export default LoginScreen;