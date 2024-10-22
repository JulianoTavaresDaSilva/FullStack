import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';


const RegisterScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState('');
  const [senha, setSenha] = useState('');


  const verificacaoRegistro = () => {
    if (!nome || !sobrenome || !email || !data || !senha) {
      Alert.alert('ERRO', 'Todos os campos devem estar preenchidos.');
      return;
    }


    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      Alert.alert('ERRO', 'Digite um email válido.');
      return;
    }


    if (senha.length < 6) {
      Alert.alert('ERRO', 'A senha deve ter no mínimo 6 caracteres.');
      return;
    }


    Alert.alert('Sucesso', `Cadastro realizado com sucesso, bem-vindo(a) ${nome}!`);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar-se</Text>


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
        value={data}
        onChangeText={setData}
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
        <Button title="Registrar" onPress={verificacaoRegistro} color="#4CAF50" />
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
});


export default RegisterScreen;
