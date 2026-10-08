import { FlatList, Pressable, Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { ContactRow } from "@/components/ContactRow";
import { CONTACTS } from "@/data/contacts";
import { useFavourites } from "@/context/FavouritesContext";

export default function Favourites() {
  const { ids } = useFavourites();
  const favourites = CONTACTS.filter((c) => ids.includes(c.id));

  return (
    <FlatList
      data={favourites}
      keyExtractor={(c) => c.id}
      renderItem={({ item }) => (
        <Link href={{ pathname: "/contacts/[id]", params: { id: item.id } }} asChild>
          <Pressable>
            <ContactRow contact={item} favourite />
          </Pressable>
        </Link>
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListEmptyComponent={
        <Text style={styles.empty}>No favourites yet. Open a contact and tap ☆.</Text>
      }
      contentContainerStyle={{ padding: 16 }}
    />
  );
}

const styles = StyleSheet.create({
  separator: { height: 1, backgroundColor: "#e5e5e5" },
  empty: { textAlign: "center", color: "#888", paddingVertical: 32 },
});
