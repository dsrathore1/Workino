import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import "../global.css";
import { Link, Stack } from "expo-router";
import { Feather } from '@expo/vector-icons';
import Form from "./Form/Form.jsx";
import Done from "./Done/Done.jsx";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{
        title: ""
      }} />

      <View className="relative h-screen w-full" style={styles.main}>
        <Text className="text-[60px] mb-24 -mt-8 uppercase text-center text-white font-black">Wel<Text className="text-[#86A789]">come</Text> to <Text className="text-[#86A789]">Work</Text>ino
        </Text>
        <Text className='text-[16px] text-center text-[#86A789] font-medium uppercase'>Discover now</Text>
        <Text className='text-[25px] text-center text-white font-bold uppercase mt-2'>Find your on-demand service worker</Text>
        <Text className='text-[14px] text-center w-3/4 text-white font-base mt-5'>We provide better service for you with our <Text className="font-bold text-[#86A789]">On-Demand service</Text> app.
        </Text>
        {/* <View className="absolute top-56 left-2 h-16 w-32 rounded-xl bg-[#ffffff59] justify-center items-center">
          <Text className="text-[14px] text-[#D2E3C8]">On-Demand</Text>
        </View>
        <View className="absolute right-2 top-64 h-16 w-32 rounded-xl bg-[#ffffff59] justify-center items-center">
          <Text className="text-[14px] text-[#D2E3C8]">Hour Basis</Text>
        </View> */}
        <Pressable className="rounded-full absolute bottom-12 rounded-b-full uppercase active:translate-y-2 duration-200 ease-in-out transition-all bg-[#4F6F52] text-white w-20 h-20 text-3xl justify-center items-center">
          <Link href="/home/HomePage" className="text-3xl text-white text-center">
            <Feather name="arrow-up-right" size={30} color="white" />
          </Link>
        </Pressable>
      </View>
    </SafeAreaView>
    // <Form />
    // <Done />
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
    paddingTop: 30
  },
  img: {
    height: "80%",
    width: "100%",
  }
});
