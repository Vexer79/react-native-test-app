import { Tabs } from "expo-router";
import React from "react";

import { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { BottomSheetModal, BottomSheetView, BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { TabBarIconCustom } from "@/components/navigation/TabBarIconCustom";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import CustomTabBarButton from "@/components/CustomTabBarButton";
import AddHours from "./addHours";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    // variables
    const snapPoints = useMemo(() => ["25%", "50%"], []);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log("handleSheetChanges", index);
    }, []);
    return (
        <>
            <GestureHandlerRootView>
                <BottomSheetModalProvider>
                    <BottomSheetModal
                        ref={bottomSheetModalRef}
                        index={1}
                        snapPoints={snapPoints}
                        onChange={handleSheetChanges}
                    >
                        <BottomSheetView style={styles.contentContainer}>
                            <Text>Awesome 🎉</Text>
                        </BottomSheetView>
                    </BottomSheetModal>
                    <Tabs
                        screenOptions={{
                            tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                            headerShown: false,
                        }}
                    >
                        <Tabs.Screen
                            name="settings"
                            options={{
                                title: "settings",
                                tabBarShowLabel: false,
                                tabBarIcon: ({ color, focused }) => (
                                    <TabBarIcon name={"tune-variant"} color={color} />
                                ),
                            }}
                        />
                        <Tabs.Screen
                            name="addHours"
                            listeners={{
                                tabPress: handlePresentModalPress,
                            }}
                            options={{
                                title: "addHours",
                                tabBarShowLabel: false,
                                tabBarIcon: ({ color, focused }) => (
                                    <TabBarIcon name={"plus"} color={color} />
                                ),
                                tabBarButton: (props) => {
                                    return <CustomTabBarButton onPress={undefined} {...props} />;
                                },
                            }}
                        />
                        <Tabs.Screen
                            name="statistics"
                            options={{
                                title: "statistics",
                                tabBarShowLabel: false,
                                tabBarIcon: ({ color, focused }) => (
                                    <TabBarIconCustom name={"bar-graph"} color={color} />
                                ),
                            }}
                        />
                    </Tabs>
                </BottomSheetModalProvider>
            </GestureHandlerRootView>
        </>
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
