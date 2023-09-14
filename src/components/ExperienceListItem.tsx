import { View, Text, Image, StyleSheet } from "react-native";
import { Experience } from "../types";

type ExperienceListItem = {
  experience: Experience;
};

export default function ExperienceListItem({ experience }: ExperienceListItem) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: experience.companyImage }} style={styles.image} />
      <View>
        <Text style={styles.title}>{experience.title}</Text>
        <Text>{experience.companyName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: "Lightgreen",
    alignItems: "center",
  },
  image: {
    width: 50,
    marginRight: 5,
    aspectRatio: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
});
