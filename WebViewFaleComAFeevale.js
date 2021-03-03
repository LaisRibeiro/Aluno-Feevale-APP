import React from 'react';
import {View, StyleSheet} from 'react-native';

import { WebView } from 'react-native-webview';

import ScreenName from '../components/ScreenName';

import Header from '../components/Header';

export default class WebViewFaleComAFeevale extends React.Component{
    render(){
        const url = '404';
        return(
            <React.Fragment>
                <Header>
                    <ScreenName name={'Fale com a Feevale'}/>
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