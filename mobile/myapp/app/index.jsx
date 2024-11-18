import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
        <Image
            style={styles.logo}
            source={require('../assets/musica.png')}
        />
        <Text style={styles.name}>SPOTYFAKE </Text>
        <Link style={styles.button} href='/Login'>CURTIR A VIBE!</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#141414',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  logo: {
    width: 450,
    height: 300,
    marginBottom: '2%',
  },
  name: {
    fontSize: 55,
    color: 'white',
    fontWeight: '1000',
    marginBottom: '3%',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    width: '50%',
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
});