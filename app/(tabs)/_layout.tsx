// app/_layout.tsx
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {Tabs} from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{tabBarActiveTintColor: "coral"}}>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Tabs Home", // You can change this title
                    headerTitleAlign: "center",
                    tabBarIcon: ({color, focused}) => {
                        return focused ? (
                            <FontAwesome name="home" size={24} color={color} />
                        ) : (
                            <AntDesign name="home" size={24} color="black" />
                        );
                    },
                }}
            />
            <Tabs.Screen
                name="login"
                options={{
                    title: "Tabs Login", // You can change this title
                    headerTitleAlign: "center",
                }}
            />
        </Tabs>
    );
}
