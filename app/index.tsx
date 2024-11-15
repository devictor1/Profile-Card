import React from 'react';
import { Pressable, Linking, View, Text, Image, StyleSheet } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';



export default function ProfileCard() {
  const colorScheme = useColorScheme();
  const handlePress = (url: string) => {
    if (url) {
      Linking.openURL(url).catch(err => console.error("Erro ao abrir o link: ", err));
    } else {
      console.error("URL inválido");
    }
  };
  
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://i.imgur.com/S7usyuV.jpeg' }} 
        style={styles.profileImage} 
      />
      <Text style={styles.name}>Victor Fregni</Text>
      <Text style={styles.description}>
        Desenvolvedor Full Stack apaixonado por tecnologia e inovação, com experiência em desenvolvimento de sistemas utilizando linguagens como Java, Python e JavaScript.
      </Text>
      <Text style={styles.description}>
        Estou estudando AWS pela Escola da Nuvem pela manhã, React e React Native pela Faculdade Flamingo de noite, e Phyton e Banco de Dados pela Faculdade Flamingo aos sábados.
      </Text>
      <Text style={styles.description}>
        Abaixo você pode ver os links de alguns dos meus projetos!
      </Text>
      <Pressable 
        onPress={() => handlePress('https://devictor1.github.io/Pagina-Pessoal/')}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'lightblue' : 'transparent'
          }
        ]}
      >
      <Text style={styles.link}>
        Minha Página Pessoal
      </Text>
    </Pressable>
      <Pressable 
        onPress={() => handlePress('https://github.com/devictor1/FarmaciaPythonMySQL')}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'lightblue' : 'transparent'
          }
        ]}
      >
      <Text style={styles.link}>
        Farmácia em Python com MySQL
      </Text>
      </Pressable>
      <Pressable 
        onPress={() => handlePress('https://github.com/devictor1/ComponentesReact')}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'lightblue' : 'transparent'
          }
        ]}
      >
      <Text style={styles.link}>
        Componentes React
      </Text>
    </Pressable>
    <Pressable 
        onPress={() => handlePress('https://github.com/devictor1/CalculadoraReact')}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'lightblue' : 'transparent'
          }
        ]}
      >
      <Text style={styles.link}>
        Calculadora em React
      </Text>
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  link: {
    fontSize: 18,
    color: 'blue',
    textAlign: 'center',
    textDecorationLine: 'underline',
    padding: 5,
  },
});