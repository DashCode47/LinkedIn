import { StyleSheet } from "react-native";
import PostListItem from "../../components/PostListItem";
import { Text, View } from "../../components/Themed";
import posts from "../../../assets/data/posts.json";

const firstPost = posts[1];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <PostListItem post={firstPost} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
