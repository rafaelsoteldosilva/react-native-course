// app/_layout.tsx

import {Stack} from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="(tabs)"
                options={{
                    headerShown: false, // Hide the header for the Stack layout
                }}
            />
        </Stack>
    );
}
