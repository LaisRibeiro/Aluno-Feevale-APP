import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { withNavigation } from 'react-navigation';

import { DrawerActions } from 'react-navigation-drawer';

class DrawerTrigger extends React.Component{
    render(){
        return(
            <TouchableOpacity style={styles.trigger}
                onPress={() => {
                    this.props.navigation.dispatch(DrawerActions.openDrawer())
                }}
            >
                <FontAwesome5
                    name={'bars'}
                    size={30}
                    color={'white'}
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    trigger: {
        marginLeft: 27.5,
        borderRadius: 30,
        width: 60,
        //heigth: 60,
    }
});

export default withNavigation(DrawerTrigger);