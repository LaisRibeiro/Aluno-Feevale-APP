import React from 'react';
import {View, StyleSheet} from 'react-native';

import { WebView } from 'react-native-webview';

import ScreenName from '../components/ScreenName';

import Header from '../components/Header';

export default class WebViewMatriculaOnline extends React.Component{
    render(){
        const url = 'https://www.feevale.br/matriculaonline';
        return(
            <React.Fragment>
                <Header>
                    <ScreenName name={'Matrícula Online'}/>
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