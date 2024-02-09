import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import "../global.css";
import { Link, Stack } from "expo-router";
import { Feather } from '@expo/vector-icons';
import PagerView from 'react-native-pager-view';

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{
        title: "",
        headerShadowVisible: false
      }} />
      <PagerView style={{ flex: 1, }} initialPage={0}>
        <View className="relative h-screen w-full flex flex-col justify-center items-center" style={styles.main} key="1">
          <Text className="text-[60px] mb-24 -mt-8 uppercase text-center text-white font-black">Wel<Text className="text-[#86A789]">come</Text> to <Text className="text-[#86A789]">Work</Text>ino
          </Text>
        </View>
        <View className="relative h-screen w-full" style={styles.main} key="2">
          <Text className='text-[16px] text-center text-[#86A789] font-medium uppercase'>Discover now</Text>
          <Text className='text-[25px] text-center text-white font-bold uppercase mt-2'>Find your on-demand service worker</Text>
          <Text className='text-[18px] text-center w-3/4 text-white font-base mt-5'>We provide better service for you with our <Text className="font-bold text-[#86A789]">On-Demand service</Text> app.
          </Text>
        </View>
        <View className="relative h-screen w-full" style={styles.main} key="3">
          <Text className="text-[60px] mb-24 -mt-8 uppercase text-center text-white font-black">Wel<Text className="text-[#86A789]">come</Text> to <Text className="text-[#86A789]">Work</Text>ino
          </Text>
          <Text className='text-[16px] text-center text-[#86A789] font-medium uppercase'>Discover now</Text>
          <Text className='text-[25px] text-center text-white font-bold uppercase mt-2'>Find your on-demand service worker</Text>
          <Text className='text-[14px] text-center w-3/4 text-white font-base mt-5'>We provide better service for you with our <Text className="font-bold text-[#86A789]">On-Demand service</Text> app.
          </Text>
          <Pressable className="rounded-full absolute bottom-32 rounded-b-full uppercase active:translate-y-2 duration-200 ease-in-out transition-all bg-[#4F6F52] text-white w-20 h-20 text-3xl justify-center items-center">

            <Link href="/home/HomePage" className="text-3xl text-white text-center">
              <Feather name="arrow-up-right" size={30} color="white" />
            </Link>
          </Pressable>
        </View>
      </PagerView>
      <Text className="text-white">slide left ar</Text>
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
  }
});
