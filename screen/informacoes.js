import React from 'react';
import { View, StyleSheet, Text, Linking } from 'react-native';

export default function DetalhesScreen({ navigation, route }) {
    const cursos = route.params.dados
    var valor
    if (cursos.valor == null) {
        valor = 'Gratuito'
    } else {
        valor = cursos.valor
    }
    const link = () => {
        const url = cursos.link
        Linking.openURL(url)
    }
    return (
        <View style={styles.container}>

            <View style={styles.textos}>
                <Text style={styles.header}>area: {cursos.area} </Text>
                <Text style={styles.text}>curso: {cursos.curso}</Text>
                <Text style={styles.text}>cargaHoraria: {cursos.cargaHoraria}</Text>
                <Text style={styles.text}>unidade: {cursos.unidade}</Text>
                <Text style={styles.text}>telefone: {cursos.telefone}</Text>
                <Text style={styles.text}>email: {cursos.email}</Text>
                <Text style={styles.text}>modalidade: {cursos.modalidade}</Text>
                <Text style={styles.text}>valor: {valor}</Text>
                <Text style={styles.link}>Link: <Text onPress={() => { link() }}>{cursos.link}</Text></Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff5e5e',
        padding: 10,

    },
    img: {
        width: '100%',
        height: '100%',
        maxHeight: 300,
    },
    textos: {
        width: '100%',
        borderLeftColor: '#000',
        borderLeftWidth: 2,
        borderRightWidth: 2,
        gap: 25,
        backgroundColor: '#e7e7e7',
        borderRadius: 7
    },
    text: {
        fontSize: 16,
        color: '#f00',
        textAlign: 'center',
        fontSize: 18,
        borderBottomWidth: 2,
        borderBottomColor: '#000',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center'

    },
    header: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        borderBottomWidth: 2,
        borderBottomColor: '#000',
        borderTopColor: '#000',
        borderTopWidth: 2,
        width: '100%',
        fontWeight: 'bold',
        color: '#f00'

    },
    link: {
        textAlign:'center',
        backgroundColor:'#fc3f3f',
        borderRadius:10,
        margin:15,
        
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff'
    }
});

