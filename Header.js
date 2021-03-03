import React, {Body} from 'react';
import { View, StyleSheet, Text } from 'react-native';

import DrawerTrigger from './DrawerTrigger';
import ScreenName from './ScreenName';

class Header extends React.Component{
    render(){
        return(
            <View style={styles.header}>
                <DrawerTrigger />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#5EC135'
    }
});

export default Header;