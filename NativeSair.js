import React from 'react';
import {View, StyleSheet} from 'react-native';

import ScreenName from '../components/ScreenName';

import Header from '../components/Header';

export default class NativeSair extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header>
                    <ScreenName name={'Aulas Hoje'}/>
                </Header>
                <View style={styles.container}>
                    <ScreenName name={'Aulas Hoje'}/>
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