import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import ScreenName from '../components/ScreenName';

import Header from '../components/Header';

export default function NativeDisciplina ({ navigation }){
          return(
            <React.Fragment>
                <Header>
                    <ScreenName name={'Aulas Hoje'}/>
                </Header>
                <View style={styles.container}>
                    <Text style={styles.textTitulo}>Disciplina 
                      <Text style={styles.textSubTit}> Projeto Integrador</Text>
                    </Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.textTitulo}>Sala 
                      <Text style={styles.textSubTit}> 009 - Laboratório de Produção</Text>
                    </Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.textTitulo}>Prédio 
                      <Text style={styles.textSubTit}> Hub One</Text>
                    </Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.textTitulo}>Horário 
                      <Text style={styles.textSubTit}> 2N</Text>
                    </Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.textTitulo}>Faltas 
                      <Text style={styles.textSubTit}> 0</Text>
                    </Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.textTitulo}>Prof. 
                      <Text style={styles.textSubTit}> Sandra Teresinha Miorelli</Text>
                    </Text>
                </View>
                <View style={styles.containerSit}>
                    <Text style={styles.textTitulo}>Situação
                      <Text style={styles.textSubTit}> Aguardando Nota</Text>
                    </Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.textTitulo}>Período
                      <Text style={styles.textSubTit}> 27 de jun de 2020 - 12 de dez de 2020</Text>
                    </Text>
                </View>
            </React.Fragment>
          )
};

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