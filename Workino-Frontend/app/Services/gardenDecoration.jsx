import { Stack, router } from "expo-router";
import React from "react";
import {
  Text,
  View,
  Pressable,
  ScrollView,
  ImageBackground,
} from "react-native";

const gardenDecImg = {
  uri: "https://images.unsplash.com/photo-1608778570811-9635cbb8ff5b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const GardenDecoration = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Garden Decoration",
          headerShadowVisible: false,
        }}
      />
      <ScrollView>
        <View className="h-screen bg-black flex flex-col">
          <View className="w-full h-full flex justify-start items-center">
            <ImageBackground
              source={gardenDecImg}
              className="h-[30%] w-[95%] my-5 rounded-xl"
            />
            <View className="border-[#eeeeee3a] border-t-2 h-full w-full">
              <Text className="text-white text-left p-2 text-3xl">Details</Text>
              <View className="text-white p-2 gap-2 text-lg">
                <Text className="text-white ">
                  1. Creative garden decoration service tailored to your
                  preferences.
                </Text>
                <Text className="text-white ">
                  2. Affordable pricing starting from
                  <Text className="font-bold text-xl text-[#D2E3C8]">
                    {" "}
                    699 Rupees.
                  </Text>
                </Text>
                <Text className="text-white ">
                  3. Complete within a max of 4 hours time for 20 yards.
                </Text>
                <Text className="text-white ">
                  4. Dedicated to the agreed-upon decoration task without
                  additional services.
                </Text>
                <Text className="text-white ">
                  5. Services encompass a variety of decorative elements
                  including{" "}
                  <Text className="font-bold text-[#D2E3C8] uppercase text-lg">
                    flower planting, lighting, and ornamental features.
                  </Text>
                </Text>
              </View>
              <View className="w-full justify-center flex items-center h-14 mt-3">
                <Pressable
                  onPress={() => {
                    router.push({
                      pathname: "/Form/[Form]",
                      params: { Form: "Garden Decor" },
                    });
                  }}
                  className="border-2 border-[#4F6F52] flex justify-center items-center rounded-md h-full w-full"
                >
                  <Text className="text-xl px-16 text-white font-bold uppercase">
                    Book Now
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default GardenDecoration;
