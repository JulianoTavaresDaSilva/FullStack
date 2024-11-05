import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, ScrollView } from 'react-native';

const PerfilScreen = () => {
  const handlePress = () => {
    Alert.alert("Botão pressionado!");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.sectionButton}>
          <TouchableOpacity onPress={handlePress} style={styles.button}>
            <Image
              source={require('../Assets/seta.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={handlePress} style={styles.button}>
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
        <Text style={styles.title}>Playlists</Text>
        
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
