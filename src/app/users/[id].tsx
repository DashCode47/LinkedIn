import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import userJson from "../../../assets/data/user.json";
import { User } from "../../types";
import ExperienceListItem from "../../components/ExperienceListItem";

export default function Profile() {
  const [user, setUser] = useState<User>(userJson);

  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const onConnect = () => {
    console.log("connect");
  };

  useLayoutEffect(() => {
    navigation.setOptions({ title: user.name });
  }, [user?.name]);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* BG image */}
        <Image source={{ uri: user.backImage }} style={styles.backImage} />
        <View style={styles.headerContent}>
          {/* Profile Image */}
          <Image source={{ uri: user.image }} style={styles.image} />
          {/* Name and Position */}
          <Text style={styles.name}>{user.name}</Text>
          <Text>{user.position}</Text>
          {/* Connect Button */}
          <Pressable onPress={onConnect} style={styles.button}>
            <Text style={styles.buttonText}>COnnet</Text>
          </Pressable>
        </View>
      </View>
      {/* About */}
      <View style={styles.about}>
        <Text style={styles.aboutTitle}>About</Text>
        <Text style={styles.paragraph}>{user.about}</Text>
      </View>
      {/* Experience */}
      <View style={styles.about}>
        <Text style={styles.aboutTitle}>Experience</Text>
        {user.experience?.map((experience) => (
          <ExperienceListItem key={experience.id} experience={experience} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: "white",
    marginBottom: 5,
  },
  xp: {},
  backImage: {
    width: "100%",
    aspectRatio: 5 / 2,
    marginBottom: -60,
  },
  image: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "white",
  },
  headerContent: {
    padding: 10,
    paddingTop: 0,
  },
  name: {
    fontSize: 24,
    fontWeight: "500",
  },
  /* Button */
  button: {
    backgroundColor: "royalblue",
    padding: 10,
    alignItems: "center",
    borderRadius: 50,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
  /* About */
  about: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 5,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 5,
  },
  paragraph: {
    lineHeight: 20,
  },
});
