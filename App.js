import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import '@fortawesome/fontawesome-free/css/all.css';


const Separator = () => <View style={styles.separator} />;

export default function App() {
  
  const [numeros, setNumeros] = useState(Array(6).fill(<i className="fas fa-money-bill-1-wave" ></i>));

  const sorteio = () => {
    setNumeros(Array.from({length: 6}, () => Math.floor(Math.random() * 60) + 1))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Mega Sena</Text>
      <Separator />
      <View style={styles.middle}>
        {numeros.map((valor) => <View  style={styles.item} ><Text>{valor}</Text></View>)}
      </View>
      <Button
        title="Gerar Jogo"
        onPress={sorteio}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    margin: 30,
    borderColor: 'purple',
    borderWidth: 2,
    borderRadius: 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'left',
  },
  middle: {
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderColor: 'purple',
    flexDirection: 'row',
    
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'purple',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  item: {
    padding: 12,
    backgroundColor: 'lightgreen',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
  },
});
