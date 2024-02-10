import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import "../global.css";
import { Feather } from '@expo/vector-icons';
import PagerView from 'react-native-pager-view';
import { Stack, Link } from "expo-router";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{
        title: "",
        headerShadowVisible: false
      }} />

      <PagerView style={{ flex: 1, }} initialPage={0}>
        <View className="relative h-screen w-full flex justify-center items-center" style={styles.main} key="1">
          <Text className="text-[60px] h-full uppercase text-center text-white font-black">Wel<Text className="text-[#86A789] font-light">come</Text> to <Text className="text-[#86A789] font-light">Work</Text>ino
          </Text>
          <View className="absolute flex justify-center items-center h-[40vh] w-full bottom-[12rem]">
            <Image source={require("../assets/PNGs/welcome_cat.png")} style={styles.png} />
          </View>
        </View>

        <View className="relative h-screen w-full" style={styles.main} key="2">
          <Text className='text-[16px] text-center text-[#86A789] font-medium uppercase'>Discover now</Text>
          <Text className='text-[25px] text-center text-white font-bold uppercase mt-2'>Find your on-demand service worker</Text>
          <Text className='text-[18px] text-center w-3/4 text-white font-base mt-5'>We provide better service for you with our <Text className="font-bold text-[#86A789]">On-Demand service</Text> app.
          </Text>

          <View className="absolute flex justify-center items-center h-[40vh] w-full bottom-[12rem]">
            <Image source={require("../assets/PNGs/garden.png")} style={styles.png} />
          </View>
        </View>
        <View className="relative h-screen w-full" style={styles.main} key="3">
          <Text className='text-[16px] text-center text-[#86A789] font-medium uppercase'>Discover now</Text>
          <Text className='text-[25px] text-center text-white font-bold uppercase mt-2'>Find your on-demand service worker</Text>
          <Text className='text-[16px] text-center w-3/4 text-white font-base mt-5'>We provide better service for you with our <Text className="font-bold text-[#86A789]">On-Demand service</Text> app.
          </Text>
          <View className="absolute flex justify-center items-center h-[40vh] w-full bottom-[12rem]">
            <Image source={require("../assets/PNGs/happy_music.png")} style={styles.png} />
          </View>
          <Pressable className="rounded-full absolute bottom-44 rounded-b-full uppercase active:translate-y-2 duration-200 ease-in-out transition-all bg-[#4F6F52] text-white w-20 h-20 text-3xl justify-center items-center">
            <Link href="/home/HomePage" className="text-3xl text-white text-center">
              <Feather name="arrow-up-right" size={30} color="white" />
            </Link>
          </Pressable>
        </View>
      </PagerView>
      <View className="w-full">
        <Text className="text-white text-right m-5 ">Swipe Right</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
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
    width: "100%"
  }
});
