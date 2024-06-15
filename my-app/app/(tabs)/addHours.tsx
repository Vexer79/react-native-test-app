import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function AddHours() {
    const bottomSheetRef = useRef<BottomSheet>(null);
    useEffect(() => {
        bottomSheetRef.current?.expand();
    });
    const snapPoints = useMemo(() => ["10%", "25%", "50%", "75%"], []);

    // renders
    return (
        <View>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        alignItems: "center",
    },
});
