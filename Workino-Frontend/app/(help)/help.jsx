import React from "react";
import { Text, View } from "react-native";

const help = () => {
  return (
    <View className="relative h-screen bg-[#eee]">
      <Text className="text-black font-bold uppercase">Contact Us</Text>
      <Text className="text-black font-light">
        If you have any question we are happy to help you.
      </Text>
      <View className="h-10 w-20 bg-[#fff] rounded-xl my-5 gap-y-10 mx-2">
        <Text className="text-[#eee]">
          Number :- <Text className="font-bold text-white">6351774992</Text>
        </Text>
        <Text className="text-[#eee]">
          E-Mail :-{" "}
          <Text className="font-bold text-white">wefarmous@gmail.com</Text>
        </Text>
      </View>
    </View>
  );
};

export default help;
