import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Feather } from "@expo/vector-icons";
import PagerView from "react-native-pager-view";
import { Stack, Link } from "expo-router";
import { Entypo } from "@expo/vector-icons";

const Start = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "",
          headerShadowVisible: false,
          headerShown: false,
        }}
      />

      <PagerView style={{ flex: 1, marginTop: 50 }} initialPage={0}>
        <View
          className="relative h-screen w-full flex justify-center items-center"
          style={styles.main}
          key="1"
        >
          <Text className="text-[60px] h-full uppercase text-center text-white font-black">
            Wel<Text className="text-[#86A789] font-light">come</Text> to{" "}
            <Text className="text-[#86A789] font-light">Work</Text>ino
          </Text>
          <View className="absolute flex justify-center items-center h-[40vh] w-full bottom-[12rem]">
            <Image
              source={require("../../assets/PNGs/welcome_cat.png")}
              style={styles.png}
            />
          </View>
        </View>
        
        <View className="relative h-screen w-full" style={styles.main} key="2">
          <Text className="text-[16px] text-center text-[#deffe1] font-medium uppercase">
            Garden Service
          </Text>
          <Text className="text-[25px] text-center text-white font-bold uppercase mt-2">
            Find your on-demand <Text className="text-[#deffe1]">Premium</Text>{" "}
            workers
          </Text>
          <Text className="text-[18px] text-center w-3/4 text-white font-base mt-5">
            We provide premium service for you with our{" "}
            <Text className="font-bold text-[#deffe1]">On-Demand service</Text>{" "}
            app.
          </Text>

          <View className="absolute flex justify-center items-center h-[40vh] w-full bottom-[12rem]">
            <Image
              source={require("../../assets/PNGs/garden.png")}
              style={styles.png}
            />
          </View>
        </View>
        <View className="relative h-screen w-full" style={styles.main} key="3">
          <Text className="text-[16px] text-center text-[#deffe1] font-medium uppercase">
            Discover now
          </Text>
          <Text className="text-[25px] text-center text-white font-bold uppercase mt-2">
            Discover Garden Service at Your Fingertips
          </Text>
          <Text className="text-[18px] text-center w-3/4 text-white font-base mt-5">
            Access a service on affordable rates through our
            <Text className="font-bold text-[#deffe1]"> Workino </Text>
          </Text>
          <View className="absolute flex justify-center items-center h-[55vh] w-full bottom-[14rem] -z-10">
            <Image
              source={require("../../assets/PNGs/happy_music.png")}
              style={styles.lastPng}
            />
          </View>
          <Pressable className="rounded-full absolute bottom-36 rounded-b-full uppercase active:translate-y-2 duration-200 ease-in-out transition-all bg-[#4F6F52] text-white w-20 h-20 text-3xl justify-center items-center">
            <Link
              href="/home/HomePage"
              className="text-3xl text-white text-center"
            >
              <Feather name="arrow-up-right" size={30} color="white" />
            </Link>
          </Pressable>
        </View>
      </PagerView>
      <View className="w-full">
        <Text className="text-white text-center m-5">
          <Entypo name="dots-three-horizontal" size={30} color="white" />
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  main: {
    flex: 1,
    justifyContent: "start",
    marginHorizontal: "auto",
    alignItems: "center",
    paddingTop: 30,
  },
  img: {
    height: "80%",
    width: "100%",
  },
  png: {
    height: "60%",
    width: "100%",
  },
  lastPng: {
    height: "80%",
    width: "100%",
  },
});

export default Start;
