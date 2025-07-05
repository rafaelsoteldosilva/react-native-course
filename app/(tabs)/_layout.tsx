// app/_layout.tsx
import {Tabs} from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{tabBarActiveTintColor: "coral"}}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "index", // You can change this title
                    headerTitleAlign: "center",
                }}
            />
            <Tabs.Screen
                name="login"
                options={{
                    title: "Login", // You can change this title
                    headerTitleAlign: "center",
                }}
            />
        </Tabs>
    );
}
