import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App({navigation}) {
  const paginaAprendizado = () => {
    navigation.navigate("Aprendizagem Industrial")
  }

  const PaginaFic = () => {
    navigation.navigate("fic")
  }
  const PaginaTecnico = () => {
    navigation.navigate("tecnico")
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>SENAI</Text>
      </View>
      <StatusBar style="auto" />
      <View style={styles.main}>
        <View style={styles.card}>
          <Image style={styles.img} source={require('../assets/imgs/cursosenaiead.png')} />
          <Text style={styles.txt} onPress={()=>{PaginaFic()}}>FORMAÇÃO INICIAL E CONTINUADA</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.img} source={require('../assets/imgs/senai.png')} />
          <Text style={styles.txt} onPress={()=>{paginaAprendizado()}}>APRENDIZAGEM INDUSTRIAL</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.img} source={require('../assets/imgs/senaiTecnico.png')} />
          <Text style={styles.txt} onPress={()=>{PaginaTecnico()}}>CURSOS TÉCNICOS</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    gap: '25px'
  },
  header: {
    backgroundColor: '#f00',
    alignItems: 'center',
    width: '100vw',
    height: '8vh',
    justifyContent: 'center',
  },
  textHeader: {
    fontSize: '22px',
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'basic-serif'
  },
  main: {
    gap: '20px',
  },
  img: {
    width: '330px',
    height: '140px',
    alignItems: 'center',
  },
  txt: {
    fontSize: '19px',
    fontWeight: 'bold',
    color:'#fff',
    backgroundColor:'#f00',
    width: '100%',
    height:'30px',
    textAlign:'center',
  },
  card:{
    alignItems:'center'
  },
});
