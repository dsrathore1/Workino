import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Alert,
} from "react-native";

const image = {
  uri: "https://www.a-star.edu.sg/images/librariesprovider29/default-album/events-banner-01b11d73764d3b4af6aea6727e8365ce84.jpg?sfvrsn=8e263904_0",
};

const Delivery = ({ help }) => {
  return (
    <>
      <Text style={styled.heading}>Select help for your {help}</Text>
      <View style={styled.mainContainer} horizontal={true}>
        <Pressable
          onPress={() => {
            Alert.alert(
              "Coming Soon",
              "We promise you, we will provide this service soon"
            );
          }}
        >
          <ImageBackground
            source={image}
            style={styled.container}
            imageStyle={styled.imgStyle}
          ></ImageBackground>
          <Text
            className="text-white text-center mt-4 capitalize"
            style={styled.text}
          >
            Delivery
          </Text>
        </Pressable>
      </View>
    </>
  );
};

const styled = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: "flex",
    // backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
  },
  heading: {
    color: "#fff",
    fontSize: 18,
    padding: 10,
    backgroundColor: "#000",
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
  },
  text: {
    fontSize: 16,
    color: "#eee",
  },
});

export default Delivery;
