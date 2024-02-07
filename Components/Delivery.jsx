import React from 'react'
// import Leaf from "../assets/leaf.jpg"
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const Delivery = ({ help }) => {
    return (
        <>
            <Text style={styled.heading}>Select help for your {help}</Text>
            <ScrollView style={styled.mainContainer} horizontal={true}>
                <View style={styled.container}></View>
                <View style={styled.container}></View>
                <View style={styled.container}></View>
                <View style={styled.container}></View>
            </ScrollView>
        </>
    );
}

const styled = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#000",
        flex: 1,
        flexWrap: "wrap",
        display: "flex",
    },
    heading: {
        color: "#fff",
        fontSize: 20,
        textTransform: "uppercase",
        padding: 10,
        backgroundColor: "#000"
    },
    container: {
        backgroundColor: "#fff",
        border: 2,
        fontSize: 26,
        height: 120,
        width: 120,
        marginTop: 5,
        marginLeft: 15
    }
});

export default Delivery;