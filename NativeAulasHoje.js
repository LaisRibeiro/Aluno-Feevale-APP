import React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';

import ScreenName from '../components/ScreenName';

import Header from '../components/Header';
import Disciplina from './NativeDisciplina';

const disciplinas = [
    {
      title: "Projeto Integrador",
      horario: "19:30",
      predio: "Verde",
      sala: "209"
    },
  ];

export default function NativeAulasHoje ({ navigation }) {
    function navigateToDisciplina(){
      navigation.navigate('Disciplina')
    }
         return(
            <React.Fragment>
            <Header>
                <ScreenName name={'Aulas Hoje'}/>
            </Header>
            <View style={styles.container}>
                    <FlatList
                    data={disciplinas}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={navigateToDisciplina}>
                            <Text style={styles.textTitulo}>{item.title}</Text>
                            <Text style={styles.textSubTit}>{item.horario} - {item.predio} - {item.sala} </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                    />

            </View>
        </React.Fragment>
        )
}

const styles = StyleSheet.create({
    container: {
        width: 'flex',
        height: '30px',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    containerSit: {
      width: 'flex',
      height: '30px',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#A2A2A2',
  },
  textTitulo: {
    fontWeight: 'bold',
    color: '#706F72'
  },
  textSubTit: {
    fontWeight: 'normal',
    color: '#706F72'
  }
})