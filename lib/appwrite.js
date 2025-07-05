// lib/appwrite.ts

import {Account, Client} from "react-native-appwrite";

export const client = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT) // Your Appwrite Endpoint
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT) // Your Appwrite Project ID
    .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM); // Your Appwrite Platform ID

export const account = new Account(client);
