import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Post, User } from "../types";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

type UserListItem = {
  user: User;
};

export default function userListItem({ user }: UserListItem) {
  return (
    <View>
      <Link href={`/users/${user}`} asChild>
        <Pressable style={styles.header}>
          <Image source={{ uri: user.image }} style={styles.userImage} />
          <View>
            <Text style={styles.username}>{user.name}</Text>
            <Text>{user.position}</Text>
          </View>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  username: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
});
