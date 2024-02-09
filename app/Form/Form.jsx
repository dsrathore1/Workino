import { View, Text, ScrollView, StyleSheet, TextInput, Pressable } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

const Form = () => {
    const [selectedTime, setSelectedTime] = useState();
    const router = useRouter();
    return (
        <>
            <Stack.Screen options={{
                headerShadowVisible: false,
                headerTitle: "🌺"
            }} />
            <ScrollView className="h-screen w-full bg-[#4F6F52]">
                <Text className="text-[#739072] text-center text-5xl uppercase font-medium" style={styled.headingText}>Service for Your</Text>
                <Text className="text-[#739072] text-center text-5xl uppercase font-black" >Backyard</Text>

                <View className="text-white bg-white" style={styled.formContainer}>
                    <View style={styled.inputField}>
                        <Text className="text-[16px] pl-4">Name / नाम</Text>
                        <TextInput style={styled.input} placeholder="John Doe"></TextInput>
                    </View>
                    <View style={styled.inputField}>
                        <Text className="text-[16px] pl-4">Address / पता</Text>
                        <TextInput style={styled.input} placeholder="Staff Quarter, No. 13 "></TextInput>
                    </View>
                    <View style={styled.inputField}>
                        <Text className="text-[16px] pl-4">Mobile Number /
                            मोबाइल नंबर</Text>
                        <TextInput style={styled.input} placeholder="6351*****"></TextInput>
                    </View>
                    <View style={styled.inputField}>
                        <Text className="text-[16px] pl-4">Select your preferable time / अपना पसंदीदा समय चुनें</Text>
                        {/* <TextInput style={styled.input} placeholder="John Doe"></TextInput> */}
                        <View style={styled.input}>
                            <Picker
                                selectedValue={selectedTime}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedTime(itemValue)
                                } mode="dialog" dropdownIconColor="#739072" >
                                <Picker.Item label="8:00 - 10:00 AM" value="8:00 - 10:00 AM" />
                                <Picker.Item label="10:00 - 12:00 AM" value="10:00 - 12:00 AM" />
                                <Picker.Item label="12:00 - 02:00 PM" value="12:00 - 02:00 PM" />
                                <Picker.Item label="02:00 - 04:00 PM" value="02:00 - 04:00 PM" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styled.btnContainer}>
                        <Pressable onPress={() => { router.push("/Done/Done") }} style={styled.formBtn}>
                            <Text className="text-white uppercase font-bold">Book Now</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </>

    );
}

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
        fontSize: 17
    },
    btnContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        marginVertical: 10
    },
    formBtn: {
        backgroundColor: "#739072",
        width: "50%",
        borderRadius: 50,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 3
    }

});

export default Form