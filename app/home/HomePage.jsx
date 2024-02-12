import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import { Stack } from "expo-router";
import Yard from '../../Components/Yard';
import Home from '../../Components/Home';
import Delivery from '../../Components/Delivery';

const HomePage = () => {
    return (
        <View style={styled.mainContainer}>
            <Stack.Screen options={{
                title: "Welcome"
            }} />
            <SafeAreaView style={styled.container}>
                <ScrollView>
                    <Yard help={"Yard"} />
                    <Home help={"Home"} />
                    <Delivery help={"Delivery (Upcoming Service...)"} />
                </ScrollView>
                
            </SafeAreaView>
        </View>
    );
}


const styled = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#000",
        flex: 1,
        justifyContent: "space-between"
    },
    container: {
        paddingBottom: 10
    },
});

export default HomePage