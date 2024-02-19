import React from "react";
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import Yard from "../../Components/Yard";

const HomePage = () => {
  const router = useRouter();
  return (
    <View style={styled.mainContainer}>
      <Stack.Screen
        options={{
          title: "Welcome",
          headerRight: () => (
            <Button
              onPress={() => {
                Alert.alert(
                  "How may I help you?",
                  "If you have any questions we are happy to help you",
                  [
                    {
                      text: "No",
                    },
                    {
                      text: "Yes",
                      onPress: () => {
                        router.push("/help")
                      },
                    },
                  ],
                  {
                    cancelable: true,
                  }
                );
              }}
              title="Help?"
              color="#86A789"
            />
          ),
        }}
      />
      <SafeAreaView style={styled.container}>
        <ScrollView>
          <Yard help={"Yard"} />
          {/* <Home help={"Home"} /> */}
          {/* <Delivery help={"Delivery (Upcoming Service...)"} /> */}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styled = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "space-between",
  },
  container: {
    paddingBottom: 10,
  },
});

export default HomePage;
