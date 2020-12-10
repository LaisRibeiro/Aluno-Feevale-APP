import React from 'react';
import {View, StyleSheet} from 'react-native';

import { WebView } from 'react-native-webview';

import ScreenName from '../components/ScreenName';

import Header from '../components/Header';

export default class WebViewMinhasSolicitacoes extends React.Component{
    render(){
        const url = 'https://espaco.feevale.br/MeuEspaco/Solicitacoes';
        return(
            <React.Fragment>
                <Header>
                    <ScreenName name={'Minhas solicitações'}/>
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