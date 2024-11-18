import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import axios from 'axios';
import { router } from 'expo-router';
import { AppContext } from '../../scripts/AppContext';
import { jwtDecode } from 'jwt-decode'


const LoginScreen = () => {
  const { setToken, setUser } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const EntrarUsuário = async () => {
    if (!email || !senha) return;

    try {
      const res = await axios.post(
        'http://localhost:8000/login',
        { "email": email, "senha": senha }
      );
      setToken(res.data.token);
      const user = jwtDecode(res.data.token);
      setUser(user);
      router.push("./Home");
    }
    catch (e) {
      Alert.alert("Um erro ocorreu, tente novamente!");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BEM-VINDO</Text>

      <View style={styles.section}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#888"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        placeholderTextColor="#888"
      />

      <View style={styles.buttonContainer}>
        <Button title="Login" color="#236bcb" onPress={EntrarUsuário}/>
      </View>

      <Link style={styles.buttonLink} href='/Registro'>CADASTRAR-SE</Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'relative',
    backgroundColor: '#141414',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  section:{
    backgroundColor: 'black',
    borderRadius: 10,
    width: 350,
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff', 
    textAlign: 'center',
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
    zIndex: 1,
  },
  buttonContainer: {
    width: '90%',
    marginVertical: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonLink: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    width: '90%',
  },
});

export default LoginScreen;