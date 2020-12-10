import React from 'react';
import ScreenName from '../components/ScreenName';
import Header from '../components/Header';

import {View, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

export default class WebViewSobre extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header>
                    <ScreenName name={'Sobre o app'}/>
                </Header>
                <View style={styles.container}>
                    <WebView 
                    source={{ uri: 'https://www.feevale.br/divulgacao/2019/appfeevale/telas/Tela_Sobre.html' }} 
                    style={{ marginTop: 20, resizeMode: 'cover', flex: 1 }} 
                    scalesPageToFit={true} 
                    originWhitelist={['https://*']}/>
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
    },
})