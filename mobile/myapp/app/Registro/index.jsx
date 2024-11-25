import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')

const registrarUsuario = async function () {
  if (!nome || !email || !senha) {
      console.log('Todos os campos devem ser preenchidos')
      return
  }
  const resposta = await fetch('http://localhost:8000/autenticacao/registro',{
      method: 'POST',
      headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
  },
      body: JSON.stringify({ nome: nome, email: email, senha: senha, sobrenome: sobrenome, dataNascimento: dataNascimento })
  })
    
if (!resposta) {
    console.log('erro')
} else if (resposta.status == 200) {
    console.log('Usuário criado com sucesso')
} else {
    console.log('ocorreu um erro')
}
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CADASTRO</Text>
      <View style={styles.section}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
      />

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
        placeholder="Data de Nascimento (DD/MM/AAAA)"
        value={dataNascimento}
        onChangeText={setDataNascimento}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <Button title="Registrar" color="#236bcb" onPress={registrarUsuario} />
      </View>
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
    backgroundColor: '#141414',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff',
    textAlign: 'center',
  },
  section:{
    backgroundColor: 'black',
    borderRadius: 10,
    width: 350,
    height: 430,
    alignItems: 'center',
    justifyContent: 'center',
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
});


export default RegisterScreen;