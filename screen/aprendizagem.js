import React from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import  CursoEad from '../mock/aprendizagem'

export default function ead({ navigation}) {
    const abrirDetalhes = (dados) => {
        navigation.navigate('Detalhes', { dados });
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={CursoEad}
                style={styles.ead}
                renderItem={({ item }) => <TouchableOpacity style={styles.item} onPress={()=>{abrirDetalhes(item)}}>
                    <Text style={styles.titulo}>{item.area}</Text>
                    <View style={styles.card}>
                    <Text style={styles.txt}>{item.curso}</Text>
                    </View>
                </TouchableOpacity>}
            />
        </View>);

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: 'center',
        padding: 20,
    },
    ead: {
        marginVertical:50,
    },

    txt: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom:15,
        paddingTop:15
    },

    titulo: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#f00',
    },
    card: {
        backgroundColor: '#f00',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowRadius: 10,
        elevation: 5
    },
    item: {
        marginVertical:20,
      
    }   
})