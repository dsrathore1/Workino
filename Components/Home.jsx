import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';
import { useRouter } from "expo-router"
const image = { uri: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
const image2 = { uri: "https://images.unsplash.com/photo-1609114215069-74764924d06b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }

const Home = ({ help }) => {
    const router = useRouter();
    return (
        <>
            <Text style={styled.heading}>Select help for your {help}</Text>
            <View style={styled.mainContainer} horizontal={true}>
                <Pressable onPress={() => router.back()}>
                    <ImageBackground source={image} style={styled.container} imageStyle={styled.imgStyle}/>
                    <Text className="text-white text-center mt-4" style={styled.text}>Utensil washing</Text>
                </Pressable>
                <Pressable onPress={() => router.back()}>
                    <ImageBackground source={image2} style={styled.container} imageStyle={styled.imgStyle}/>
                    <Text className="text-white text-center mt-4" style={styled.text}>House work</Text>
                </Pressable>
            </View>
        </>
    );
}

const styled = StyleSheet.create({
    mainContainer: {
        flex: 1,
        display: "flex",
        // backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
        flexWrap: "wrap",
    },
    heading: {
        color: "#fff",
        fontSize: 18,
        padding: 10,
        backgroundColor: "#000"
    },
    container: {
        backgroundColor: "#fff",
        height: 150,
        width: 150,
        borderRadius: 10,
        marginTop: 10,
    },
    imgStyle: {
        borderRadius: 10,
        objectFit:"fill"
    },
    text: {
        fontSize: 16,
        textTransform: "capitalize",
        color: "#eee"
    }
});

export default Home;