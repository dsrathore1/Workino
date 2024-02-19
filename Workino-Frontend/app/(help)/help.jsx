import { Stack, router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Help = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Contact Us",
        }}
      />
      <View className="relative h-screen bg-[#eee] px-4 w-full justify-start items-center flex mt-10">
        <Text className="text-black font-light text-2xl text-center">
          If you have any question we are happy to help you.
        </Text>
        <View className="h-[40%] w-full bg-[#fff] rounded-xl my-5 gap-y-10 mx-2 flex justify-center items-center">
          <Text className="text-[#000] text-2xl">
            Call me :- <Text className="font-bold text-000">6351774992</Text>
          </Text>
          <Text className="text-[#000] text-2xl">
            E-Mail :-{" "}
            <Text className="font-bold text-000">wefarmous@gmail.com</Text>
          </Text>
        </View>
        <Pressable
          className="border-[#86A789] border-2 rounded-lg"
          onPress={() => {
            router.back();
          }}
        >
          <Text className="px-16 py-3 text-xl uppercase">Home</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Help;
