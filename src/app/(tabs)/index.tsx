import { View, Text, StyleSheet, Pressable } from "react-native";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { theme, colors, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>DAUST Messenger</Text>
      <Text style={[styles.subtitle, { color: colors.subtext }]}>
        Current Theme: {theme.toUpperCase()}
      </Text>

      <Pressable
        style={[styles.button, { backgroundColor: colors.accent }]}
        onPress={toggleTheme}
      >
        <Text style={styles.buttonText}>
          Switch to {theme === "light" ? "Dark 🌙" : "Light ☀️"} Mode
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    marginTop: 12,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 16,
  },
});
