import React from 'react';
import {View, StyleSheet} from 'react-native';

import { WebView } from 'react-native-webview';

import ScreenName from '../components/ScreenName';

import Header from '../components/Header';

export default class WebViewInformacoesCadastrais extends React.Component{
    render(){
        const url = 'https://espaco.feevale.br/MeusDados';
        return(
            <React.Fragment>
                <Header>
                    <ScreenName name={'Meus Dados'}/>
                </Header>
               <WebView source={{ uri: url }} style={{ marginTop: 20 }} />
           </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})