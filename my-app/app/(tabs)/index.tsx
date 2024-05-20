import { Image, StyleSheet, Platform } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
            headerImage={
                <Image source={require("@/assets/images/money.jpg")} style={styles.reactLogo} />
            }
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Ласкаво просимо Мій Повелителю👑</ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText>
                    Щоб день Вам вдався вдало, Вам потрібно дотримуватись таких пунктів:
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">1) Пізній підйом та повільний сніданок</ThemedText>
                <ThemedText>
                    - Прокиньтеся без будильника і залишайтеся в ліжку стільки, скільки хочеться.
                </ThemedText>
                <ThemedText>
                    - Приготуйте собі легкий сніданок або замовте його додому, насолоджуючись їжею
                    без поспіху.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">2) Час для хобі або пасивного відпочинку</ThemedText>
                <ThemedText>
                    - Прочитайте книгу, перегляньте серіал, слухайте музику або подкаст.
                </ThemedText>
                <ThemedText>
                    - Займіться чимось, що приносить вам задоволення і не вимагає зусиль.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">
                    3) Розслаблююча прогулянка або час на свіжому повітрі
                </ThemedText>
                <ThemedText>
                    Вийдіть на коротку прогулянку в парк або просто посидьте на балконі,
                    насолоджуючись природою. Це допоможе освіжити думки і розслабитися.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">4) Тихий час для себе</ThemedText>
                <ThemedText>
                    Подрімайте, займіться медитацією або просто полежіть, слухаючи розслаблюючу
                    музику.
                </ThemedText>
                <ThemedText>Відключіться від всіх справ і дозвольте собі повний спокій.</ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">5) Спокійний вечір</ThemedText>
                <ThemedText>
                    Приготуйте або замовте легку вечерю і насолоджуйтеся нею без поспіху.
                </ThemedText>
                <ThemedText>
                    Проведіть вечір за переглядом фільму або серіалу, прийміть теплу ванну перед
                    сном.
                </ThemedText>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: "100%",
        width: "100%",
    },
});
