import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import users from "../../assets/data/users.json";
import UserListItem from "../components/useListItem";
import { useNavigation } from "expo-router";

export default function SearchScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: "Search Users",
        onChangeText: setSearch,
      },
    });
  }, [navigation]);
  return (
    <FlatList
      data={users}
      renderItem={({ item }) => <UserListItem user={item} />}
    />
  );
}
