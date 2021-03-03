import React from 'react';
import { View, StyleSheet, Image, TextInput, Button} from 'react-native';

import ScreenName from '../components/ScreenName';

import Header from '../components/Header';

export default class NativeLogin extends React.Component{

    state = {
        codigo: '',
        senha: ''
     }
     handleCodigo = (text) => {
        this.setState({ codigo: text })
     }
     handleSenha = (text) => {
        this.setState({ senha: text })
     }

    render(){
        return(
            <React.Fragment>
                <View style={styles.container}>
                    <Image 
                        source={require('../images/LogoFeevale.png')}
                        style={styles.image}/>
                     <TextInput style={styles.input}
                            placeholder = "Código do aluno"
                            placeholderTextColor = "#9a73ef"
                            autoCapitalize = "none"
                            onChangeText = {this.handleCodigo}
                      />

                    <TextInput style={styles.input}
                            placeholder = "Senha Feevale"
                            placeholderTextColor = "#9a73ef"
                            autoCapitalize = "none"
                            onChangeText = {this.handleCodigo}/>
                    <Button style={styles.button}
                        title="Entrar"
                    />
                </View>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5EC135'
    },
    image: {
        width: '70%',
        height: 100,
    },
    input: {
        width: '50%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 2,
        backgroundColor: 'white', 
        textAlign: 'center',
        marginTop: 10,
    },
    button: {
        width: '50%',
        height: 40,
        marginTop: 10,
        backgroundColor: '#fecd00', 
    }
})