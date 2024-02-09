import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { Stack, useRouter } from "expo-router";

export default function Done() {
    const router = useRouter();
    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: "",
                    headerShadowVisible: false
                }} />
            <View className="bg-[#4F6F52] relative h-screen px-5 flex justify-center items-center">
                <View className="bg-[#4F6F52] h-10 w-10 absolute top-[6.8rem] rounded-full z-10 " />
                <View className="bg-[#4F6F52] h-10 w-10 absolute bottom-[12rem] rounded-full z-10 " />
                <View className="h-[60vh] px-4 -mt-20 w-full z-0 bg-white rounded-3xl shadow-gray-700 shadow-xl">
                    <View className="w-full flex justify-center items-center mt-10">
                        <Image source={require("../../assets/done.png")} style={styled.doneImg} />
                    </View>
                    <Text className="text-3xl mt-5 text-center font-semibold text-gray-800">Thank You!</Text>
                    <Text className="text-2xl mt-5 text-start font-semibold text-gray-600">Booking Details</Text>
                    <Text className="text-xl mt-2 text-start font-semibold text-gray-500">We are happy to help you!</Text>
                    <Text className="text-md mt-2 text-start font-semibold text-gray-500">Your appointment is booked with the reference number</Text>
                    <Text className="text-black font-black text-5xl text-center mt-5">011012</Text>
                    <Pressable onPress={() => { router.push("/home/HomePage") }} className="flex justify-center items-center mt-8">
                        <Text className="border-[#86A789] rounded-md text-[#739072] border-2 py-3 px-12 text-xl text-center">Home</Text>
                    </Pressable>
                </View>
            </View>
        </>
    );
}

const styled = StyleSheet.create({
    doneImg: {
        height: 70,
        width: 70,
    }
})