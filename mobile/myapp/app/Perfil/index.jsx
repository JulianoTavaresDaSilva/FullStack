import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.canceled) {
    setImage(result.assets[0].uri);
  }
};

const handletSendImage = async () => {
  try {
    const data = {
      file: image,
      upload_preset: 'ml_default',
      name: 'teste',
    };
    const res = await fetch('http://api.cloudinary.com/v1_1/dywd7cidx/upload', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

const PerfilScreen = ({ navigation }) => {  
  
  const returnHome = () => {  
    navigation.navigate('Home');  
  };

  const editProfile = () => {
    
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.sectionButton}>
          <TouchableOpacity onPress={returnHome} style={styles.button}>
            <Image
              source={require('../Assets/seta.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={editProfile} style={styles.button}>
            <Image
              source={require('../Assets/lapis.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        
        <Image
          style={styles.foto}
          source={require('../Assets/gon.jpg')}
        />
        <Text style={styles.title}>USER NAME</Text>
        <View style={styles.sectionPlaylist}>
          <Text style={styles.title}>PLAYLISTS</Text>
        </View>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,  
    backgroundColor: '#141414',
  },
  container: {
    alignItems: 'center', 
    paddingHorizontal: 20,
  },
  sectionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },    
  button: {
    height: 50,
    width: 50,
  },
  icon: {
    height: '100%',
    width: '100%',
  },
  foto: {
    height: 250,
    width: 250,
    borderRadius: 125,
    marginBottom: '2%',
  }, 
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff',
    textAlign: 'center',
  }, 
  texto: {
    color: '#fff'
  },
});

export default PerfilScreen;
