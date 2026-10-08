import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { Contact } from "@/data/contacts";

export function ContactRow({
  contact,
  selected,
  favourite = false,
  onPress,
}: {
  contact: Contact;
  selected?: boolean;
  favourite?: boolean;
  onPress?: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.row, selected && styles.rowSelected]}
    >
      <Image
        source={`https://i.pravatar.cc/100?u=${contact.id}`}
        style={styles.avatar}
      />
      <View style={styles.rowText}>
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.program}>{contact.program}</Text>
      </View>
      {favourite && <Text style={styles.star}>★</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", gap: 12, paddingVertical: 10 },
  rowSelected: { backgroundColor: "#dbeafe", borderRadius: 8, paddingHorizontal: 8 },
  avatar: { width: 44, height: 44, borderRadius: 22 },
  rowText: { flex: 1 },
  name: { fontSize: 16, fontWeight: "600" },
  program: { fontSize: 13, color: "#666" },
  star: { fontSize: 18, color: "#f39c12" },
});
