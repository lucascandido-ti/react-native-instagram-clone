import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PostFeed } from './components/container';

class InstaClone extends Component{

    render(){
        //Renderiza Header da Aplicação
        return(
            <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
                <View style={styles.tempNav}>
                    <Text style={{ color: "black" }}>Instagram</Text>
                </View>
                <PostFeed />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tempNav: {
        width:100 + "%",
        height: 45,
        backgroundColor: "rgb(245,245,245)",
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default InstaClone;