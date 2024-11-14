import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
        <Text style={styles.name}>HOME</Text>
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
  name: {
    fontSize: 55,
    color: 'white',
    fontWeight: '1000',
    marginBottom: '3%',
  },
});