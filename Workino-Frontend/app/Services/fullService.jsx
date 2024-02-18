import { Stack, router } from "expo-router";
import React from "react";
import {
  Text,
  View,
  Pressable,
  ScrollView,
  ImageBackground,
} from "react-native";

const fullService = {
  uri: "https://images.unsplash.com/photo-1618935810018-dd4adbb64b78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const FullService = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Full Service",
          headerShadowVisible: false,
        }}
      />
      <ScrollView>
        <View className="h-screen bg-black flex flex-col">
          <View className="w-full h-full flex justify-start items-center">
            <ImageBackground
              source={fullService}
              className="h-[40%] w-[95%] my-5 rounded-xl"
            />
            <View className="border-[#eeeeee3a] border-t-2 h-full w-full">
              <Text className="text-white text-left p-2 text-3xl">Details</Text>
              <View className="text-white p-2 gap-2 text-lg">
                <Text className="text-white ">
                  1. Comprehensive garden service encompassing decoration,
                  backyard cleaning, and planting.
                </Text>
                <Text className="text-white ">
                  2. Affordable pricing starting from
                  <Text className="font-bold text-xl text-[#D2E3C8]"> 1599 Rupees.</Text>
                </Text>
                <Text className="text-white ">
                  3. Complete within a max of 6 hours time for 20 yards.
                </Text>
                <Text className="text-white ">
                  4. Exclusive focus on the agreed-upon tasks without additional
                  services.
                </Text>
                <Text className="text-white ">
                  5. Services cover a wide spectrum including <Text className="font-bold text-[#D2E3C8] uppercase text-lg">planting, creative decoration, backyard cleaning,
                  </Text> and efficient completion of tasks.
                </Text>
              </View>
              <View className="w-full justify-center flex items-center h-14 mt-3">
                <Pressable
                  onPress={() => {
                    router.push({
                      pathname: "/Form/[Form]",
                      params: { Form: "Full Service" },
                    });
                  }}
                  className="border-2 border-[#4F6F52] flex justify-center items-center rounded-md h-full"
                >
                  <Text className="text-xl px-16 text-white font-bold">
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

export default FullService;
