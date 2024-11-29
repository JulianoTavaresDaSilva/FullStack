import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MusicPlayerScreen = () => {
  return (
    <View style={styles.container}>
      {/* Área de Informações da Música */}
      <View style={styles.playerInfo}>
        <Image 
          source={{uri: 'https://www.2pac.com/files/2022/11/artwork-440x440-16.jpg'}} 
          style={styles.albumImage} 
        />
        <View style={styles.trackInfo}>
          <Text style={styles.trackTitle}>Hit 'Em Up (Single Version)</Text>
          <Text style={styles.trackArtist}>2Pac</Text>
        </View>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlText}>{"<<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlText}>⏯️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlText}>{">>"}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.progressBar}>
        <Text style={styles.time}>0:00</Text>
        <View style={styles.progressTrack}>
          <View style={styles.progressFill}></View>
        </View>
        <Text style={styles.time}>3:45</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  
  playerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  albumImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 20,
  },
  trackInfo: {
    flex: 1,
  },
  trackTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  trackArtist: {
    color: '#ccc',
    fontSize: 18,
  },

  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  controlButton: {
    backgroundColor: '#236bcb',
    padding: 15,
    borderRadius: 50,
    marginHorizontal: 20,
  },
  controlText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  progressBar: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  time: {
    color: '#ccc',
    fontSize: 14,
  },
  progressTrack: {
    width: '80%',
    height: 5,
    backgroundColor: '#666',
    borderRadius: 5,
    marginVertical: 5,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#236bcb',
    width: '50%',  // Progresso da música (ajuste conforme necessário)
  },

  volumeControl: {
    width: '80%',
    alignItems: 'center',
  },
  volumeLabel: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  volumeBar: {
    width: '100%',
    height: 5,
    backgroundColor: '#666',
    borderRadius: 5,
  },
  volumeFill: {
    height: '100%',
    backgroundColor: '#236bcb',
    width: '70%',  // Volume da música (ajuste conforme necessário)
  },
});

export default MusicPlayerScreen;
