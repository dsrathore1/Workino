import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import "../global.css";
import { Link, Stack, router } from "expo-router";


export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={false}>
        <Stack.Screen options={{
          title: ""
        }} />
        <View style={styles.main}>
          <Text className='text-[60px] text-center text-white font-bold uppercase'>Welcome to Workino</Text>
          <Pressable className="rounded-full rounded-b-full text-center uppercase active:translate-y-2 duration-200 ease-in-out transition-all mt-4 bg-[#892CDC] text-white w-full px-10 py-5 text-3xl">
            <Link href="/home/HomePage" className="text-3xl text-white text-center">Book now</Link>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#000',
    display: "flex",
    justifyContent: "center",
    height: 10,
    alignItems: "center"
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  subtitle: {
    fontSize: 36,
    color: "#fff",
    backgroundColor: "#892CDC",
    textAlign: "center",
    borderRadius: 50,
    paddingVertical: 5,
    width: "100%",
    marginTop: "10%"
  },
});
