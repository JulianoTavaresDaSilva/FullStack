import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

const entrarUsuário = async function (){
  if (!email || !senha) {
    console.log('Todos os campos devem ser preenchidos')
    return
}
const resposta = await fetch('http://localhost:8000/login',{
  method: 'POST',
  headers: {
  Accept: 'application/json',
  'Content-type': 'application/json',
},
  body: JSON.stringify({email: email, senha: senha})
})

if (!resposta) {
console.log('erro')
} else if (resposta.status == 200) {
console.log('Usuário logado com sucesso')
} else {
console.log('ocorreu um erro')
}
}

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        colors={['purple', '#000000']}
        style={styles.background}
      />

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
        <Button title="Login" color="#236bcb" onPress={entrarUsuário}/>
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