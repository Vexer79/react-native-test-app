import React from "react";
import { Text, StyleSheet, Pressable, Image, TouchableOpacity, View } from "react-native";

export default function Button(props: any) {
    const { children, onPress } = props;
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <View
                style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    backgroundColor: "red",
                }}
            >
                {children}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        position:"relative",
        bottom: 30
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
    },
});
