import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

export default function UserProfile() {
  const [profile, setProfile] = useState({});
  const [editingMode, setEditingMode] = useState(false);
  const [senha, setSenha] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const navigation = useNavigation();

  const updateProfile = async () => {
    if (senha && senha !== confirmPass) {
      Alert.alert("As senhas não correspondem.");
      return;
    }
    
    try {
      const formData = new FormData();

      if (profile.profileImage) {
        formData.append("profileImage", {
          uri: profile.profileImage,
          type: "image/jpeg",
          name: "profilePhoto.jpg",
        });
      }

      formData.append("name", profile.name);
      formData.append("username", profile.username);
      formData.append("description", profile.description);

      if (senha) {
        formData.append("senha", senha);
      }

      Alert.alert("Perfil atualizado com sucesso!");
      setEditingMode(false);
      setSenha("");
      setConfirmPass("");
    } catch (error) {
      console.error("Erro ao atualizar o perfil:", error);
      Alert.alert("Erro ao atualizar o perfil.");
    }
  };

  const selectImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("A permissão para acessar a galeria é necessária.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfile({ ...profile, profileImage: result.uri });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionButton}>
          <TouchableOpacity style={styles.iconButton}> 
            <Image
              source={require('../../assets/seta.png')}
              onPress={() => navigation.navigate("/Home")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      <View style={styles.ImageContainer}>
        <TouchableOpacity onPress={selectImage}>
          <Image
            source={
              profile.profileImage
                ? { uri: profile.profileImage }
                : require("../../assets/gon.jpg")
            }
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.InfoContainer}>
        {editingMode ? (
          <>
            <TextInput
              style={styles.input}
              placeholder="Usuário"
              value={profile.username}
              onChangeText={(text) => setProfile({ ...profile, username: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={profile.name}
              onChangeText={(text) => setProfile({ ...profile, name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Descrição"
              value={profile.description}
              onChangeText={(text) => setProfile({ ...profile, description: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Nova Senha"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirmar Senha"
              secureTextEntry
              value={confirmPass}
              onChangeText={setConfirmPass}
            />
          </>
        ) : (
          <>
            <Text style={styles.info}>{profile.username}</Text>
            <Text style={styles.info}>{profile.email}</Text>
            <Text style={styles.info}>{profile.name}</Text>
            <Text style={styles.info}>{profile.description}</Text>
          </>
        )}
      </View>

      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => (editingMode ? updateProfile() : setEditingMode(true))}
      >
        <Text style={styles.pressText}>
          {editingMode ? "Salvar Alterações" : "Editar Perfil"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
    padding: 20,
    alignItems: "center",
  },
  sectionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  iconButton: {
    height: 50,
    width: 50,
  },
  icon: {
    height: '100%',
    width: '100%',
  },
  ImageContainer: {
    marginTop: 50,
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  InfoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  info: {
    color: "#FFF",
    fontSize: 28,
    marginVertical: 3,
  },
  input: {
    color: "#FFF",
    fontSize: 18,
    backgroundColor: "#333",
    padding: 10,
    marginVertical: 3,
    width: "100%",
    borderRadius: 8,
  },
  mainButton: {  
    width: "90%",
    height: 40,
    backgroundColor: "#236bcb",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  pressText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
})