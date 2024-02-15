import { Stack } from "expo-router/stack";

export default function Layout() {
    return (
        <Stack
            screenOptions={
                {
                    headerStyle: {
                        backgroundColor: "#4F6F52",
                    },
                    headerTitleStyle: {
                        fontSize: 25
                    },
                    headerTitleAlign: "center",
                    headerTintColor: "#fff",
                    statusBarTranslucent: true,
                }
            }
        />
    );
}