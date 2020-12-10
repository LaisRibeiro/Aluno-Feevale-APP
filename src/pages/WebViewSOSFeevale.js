import React from 'react';
import {View, StyleSheet} from 'react-native';

import { WebView } from 'react-native-webview';

import ScreenName from '../components/ScreenName';

import Header from '../components/Header';

export default class WebViewSOSFeevale extends React.Component{
    render(){
        const url = 'https://www.feevale.br/divulgacao/2019/appfeevale/telas/Tela_SOSFeevale.html';
        return(
            <React.Fragment>
                <Header>
                    <ScreenName name={'SOS Feevale'}/>
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