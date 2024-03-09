import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";

const Form = () => {
  const [selectedTime, setSelectedTime] = useState();

  const { Form } = useLocalSearchParams();

  const [name, setName] = useState("");
  const [add, setAdd] = useState("");
  const [num, setNum] = useState();

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const postData = async () => {
    await fetch("https://workino.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        address: add,
        mob_number: num,
        category: Form,
        preferredTime: selectedTime,
      }),
    });
  };

  const handleSubmit = () => {
    if (isFormValid) {
      console.log("Form submitted successfully!");
      Alert.alert(
        "Thank you for booking",
        "We will be there soon or contact me by calling on 6351774992"
      );
      postData();
      setName("");
      setAdd("");
      setNum("");
      setSelectedTime("8:00 - 10:00 AM");
    } else {
      console.log("Form has errors. Please correct them.");
      Alert.alert("Please fill the form first");
    }
  };

  const validateForm = () => {
    let errors = {};

    // Validate name field
    if (!name) {
      errors.name = "Name is required.";
    }

    // Validate address field
    if (!add) {
      errors.add = "Address is required.";
    }

    // Validate mobile number field
    if (!num) {
      errors.num = "Mobile number is required.";
    } else if (num.length < 10) {
      errors.password = "Mobile Number must be 10 characters.";
    }

    // Set the errors and update form validity
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  useEffect(() => {
    validateForm();
  }, [name, add, num]);

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScrollView className="h-screen w-full bg-[#4F6F52]">
        <Text
          className="text-[#739072] text-center text-5xl uppercase font-medium"
          style={styled.headingText}
        >
          Service for Your
        </Text>
        <Text className="text-[#739072] text-center text-5xl uppercase font-black">
          {Form}
        </Text>
        <View
          className="text-white h-full mb-[5rem] bg-white"
          style={styled.formContainer}
        >
          <View style={styled.inputField}>
            <Text className="text-[16px] pl-4">Name / नाम</Text>
            <TextInput
              style={styled.input}
              value={name}
              onChangeText={(text) => {
                setName(text);
              }}
              placeholder="John Doe"
            ></TextInput>
          </View>
          <View style={styled.inputField}>
            <Text className="text-[16px] pl-4">Address / पता</Text>
            <TextInput
              numberOfLines={5}
              multiline={true}
              style={styled.input}
              placeholder="Staff Quarter, No. 13"
              value={add}
              onChangeText={(text) => {
                setAdd(text);
              }}
            ></TextInput>
          </View>
          <View style={styled.inputField}>
            <Text className="text-[16px] pl-4">
              Mobile Number / मोबाइल नंबर
            </Text>
            <TextInput
              value={num}
              onChangeText={(text) => {
                setNum(text);
              }}
              keyboardType="number-pad"
              style={styled.input}
              placeholder="6351*****"
            ></TextInput>
          </View>
          <View style={styled.inputField}>
            <Text className="text-[16px] pl-4">
              Select your preferable time / अपना पसंदीदा समय चुनें
            </Text>
            <View style={[styled.input, { marginBottom: 50 }]}>
              <Picker
                selectedValue={selectedTime}
                onValueChange={(itemValue) => setSelectedTime(itemValue)}
                mode="dialog"
                dropdownIconColor="#739072"
              >
                <Picker.Item label="8:00 - 10:00 AM" value="8:00 - 10:00 AM" />
                <Picker.Item
                  label="10:00 - 12:00 AM"
                  value="10:00 - 12:00 AM"
                />
                <Picker.Item
                  label="12:00 - 02:00 PM"
                  value="12:00 - 02:00 PM"
                />
                <Picker.Item
                  label="02:00 - 04:00 PM"
                  value="02:00 - 04:00 PM"
                />
              </Picker>
            </View>
          </View>
          <View style={styled.btnContainer}>
            <Pressable
              disabled={!isFormValid}
              onPress={() => {
                handleSubmit();
              }}
              style={[styled.formBtn, { opacity: isFormValid ? 1 : 0.5 }]}
            >
              <Text className="text-white uppercase font-bold">Book Now</Text>
            </Pressable>

            {Object.values(errors).map((error, index) => (
              <Text key={index} style={styled.error}>
                {error}
              </Text>
            ))}
            {/* <Pressable
              onPress={() => {
                router.push("/Done/Done");
              }}
              style={styled.formBtn}
            >
              <Text className="text-white uppercase font-bold">Book Now</Text>
            </Pressable> */}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styled = StyleSheet.create({
  formContainer: {
    height: "100%",
    backgroundColor: "#fff",
    marginTop: 50,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingTop: 12,
  },
  headingText: {
    marginTop: 50,
    letterSpacing: 1,
    fontWeight: "900",
  },
  inputField: {
    gap: 10,
    marginVertical: 10,
    paddingHorizontal: 8,
  },
  input: {
    borderStyle: "solid",
    borderColor: "#D2E3C8",
    height: 56,
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 3,
    fontSize: 17,
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginVertical: 10,
  },
  formBtn: {
    backgroundColor: "#739072",
    width: "50%",
    borderRadius: 50,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 3,
    marginVertical: 10,
  },
  error: {
    color: "red",
    fontSize: 16,
    marginBottom: 15,
  },
});

export default Form;
