import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/Header.js' ;
import { Hero } from '../sections/Hero.js';
import { Menu } from '../sections/Menu.js';

export class Home extends React.Component {
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Header message = 'Press to Login' />
                <Hero/>
                <Menu navigate = {navigate}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});