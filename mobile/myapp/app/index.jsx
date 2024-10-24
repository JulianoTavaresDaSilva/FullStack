import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
        <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            colors={['purple', '#000000',]}
            style={styles.background}
        />
        <Image
            style={styles.logo}
            source={require('./Assets/musica.png')}
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
    backgroundColor: 'orange',
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
    fontWeight: '1000',
    marginBottom: '3%',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'purple',
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