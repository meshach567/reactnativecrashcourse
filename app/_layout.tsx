import { Stack, Slot } from 'expo-router';

import React from "react";

import "../global.css"

// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false}} />
    </Stack> 
  );
}

