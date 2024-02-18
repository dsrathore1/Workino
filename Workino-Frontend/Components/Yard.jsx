import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";

const image1 = {
  uri: "https://images.unsplash.com/photo-1572085313466-6710de8d7ba3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};
const image2 = {
  uri: "https://images.unsplash.com/photo-1657664042448-c955b411d9d0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&Xixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};
const image3 = {
  uri: "https://images.unsplash.com/photo-1637531347055-4fa8aa80c111?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};
const image4 = {
  uri: "https://yt3.googleusercontent.com/ytc/AIf8zZQRJXcOcibnSuu57AEDPq92nmm8RGbVBhRu-2Su=s900-c-k-c0x00ffffff-no-rj",
};

const Yard = ({ help }) => {
  const router = useRouter();
  return (
    <>
      <Text style={styled.heading}>Select help for your {help}</Text>
      <View style={styled.mainContainer} horizontal={true}>
        <Pressable
          onPress={() =>
            router.push({
              pathname: "/Services/backyardDetails",
            })
          }
        >
          <ImageBackground
            source={image1}
            style={styled.container}
            imageStyle={styled.imgStyle}
          />
          <Text
            className="text-white text-center mt-4 font-bold"
            style={styled.text}
          >
            Backyard Cleaning
          </Text>
        </Pressable>
        <Pressable onPress={() => router.push("/Services/gardenDecoration")}>
          <ImageBackground
            source={image2}
            style={styled.container}
            imageStyle={styled.imgStyle}
          />
          <Text
            className="text-white text-center mt-4 font-bold"
            style={styled.text}
          >
            Garden decoration
          </Text>
        </Pressable>
        <Pressable onPress={() => router.push("/Services/planting")}>
          <ImageBackground
            source={image3}
            style={styled.container}
            imageStyle={styled.imgStyle}
          />
          <Text
            className="text-white text-center mt-4 font-bold"
            style={styled.text}
          >
            Planting
          </Text>
        </Pressable>
        <Pressable onPress={() => router.push("/Services/fullService")}>
          <ImageBackground
            source={image4}
            style={styled.container}
            imageStyle={styled.imgStyle}
          />
          <Text
            className="text-white text-center mt-4 font-bold"
            style={styled.text}
          >
            Full service?
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
    color: "#BFD8AF",
    fontSize: 18,
    padding: 10,
    backgroundColor: "#000",
  },
  container: {
    backgroundColor: "#fff",
    height: 250,
    width: 170,
    borderRadius: 10,
    marginTop: 10,
  },
  imgStyle: {
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    textTransform: "uppercase",
    marginTop: 8,
  },
});

export default Yard;
