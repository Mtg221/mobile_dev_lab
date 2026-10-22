import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function About() {
  return (
    <View style={styles.screen}>
      <Text style={styles.name}>DAUST Messenger</Text>
      <Text style={styles.version}>Version {Constants.expoConfig?.version}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center", gap: 4 },
  name: { fontSize: 22, fontWeight: "bold" },
  version: { color: "#666" },
});
