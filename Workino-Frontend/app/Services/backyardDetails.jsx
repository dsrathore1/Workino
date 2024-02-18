import { Stack, router } from "expo-router";
import React from "react";
import {
  Text,
  View,
  Pressable,
  ScrollView,
  ImageBackground,
} from "react-native";

const backyardImg = {
  uri: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const BackyardDetails = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Backyard Cleaning",
          headerShadowVisible: false,
        }}
      />
      <ScrollView>
        <View className="h-screen bg-black flex flex-col">
          <View className="w-full h-full flex justify-start items-center">
            <ImageBackground
              source={backyardImg}
              className="h-[40%] w-[95%] my-5 rounded-xl"
            />
            <View className="border-[#eeeeee3a] border-t-2 h-full w-full">
              <Text className="text-white text-left p-2 text-3xl">Details</Text>
              <View className="text-white p-2 gap-2 text-lg">
                <Text className="text-white ">
                  1. Prompt and punctual service delivery guaranteed.
                </Text>
                <Text className="text-white">
                  2. Affordable pricing at just
                  <Text className="font-bold text-xl text-[#D2E3C8]">
                    {" "}
                    599 Rupees.
                  </Text>
                </Text>
                <Text className="text-white ">
                  3. Complete within a max of 3 hours time for 20 yards.
                </Text>
                <Text className="text-white ">
                  4. Without your consent, we would not take any actions.
                </Text>
                <Text className="text-white ">
                  5. Complete garden care:{" "}
                  <Text className="font-bold text-[#D2E3C8] uppercase text-lg">
                    cleaning, watering, wood collection, and controlled burning
                  </Text>{" "}
                  with your approval.
                </Text>
              </View>
              <View className="w-full justify-center flex items-center h-14 mt-3">
                <Pressable
                  onPress={() => {
                    router.push({
                      pathname: "/Form/[Form]",
                      params: { Form: "Backyard" },
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

export default BackyardDetails;
