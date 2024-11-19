import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, TextInput, Image, Pressable, Button } from 'react-native'
import { Link } from 'expo-router'
import { AppContext } from '../../scripts/AppContext';
import { router } from 'expo-router'


export default login = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [mensagem, setMensagem] = useState('')
    const { userInfo, setUserInfo } = useContext(AppContext)



    const EntrarUsuario = async () => {
        if (!email || !senha) {
            setMensagem('Todos os campos devem ser preenchidos')
            return;
        }
        try {
            const response = await fetch('http://localhost:8000/autenticacao/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email, senha: senha })
            });
            data = await response.json()
            if (response.status === 200) {
                setMensagem('Signup successfully!');
                setUserInfo(data.userInfo)
                {userInfo.status == 'active'? router.push('/Home'): router.push('/Perfil')}
            } else if (response.status === 409) {
                setMensagem('Email already exists');
            } else {
                setMensagem('An error occurred, try again');
            }
        } catch (error) {
            setMensagem('Error during signup. Please try again.');
        }
    };


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
        inputMode='email'
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
        <Button title="Login" color="#236bcb" onPress={EntrarUsuario}/>
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

