import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { Post } from "../types";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

type PostListItemProps = {
  post: Post;
};
type FooterButtonProp = {
  text: string;
  icon: React.ComponentProps<typeof FontAwesome>["name"];
};

function FooterButton({ text, icon }: FooterButtonProp) {
  return (
    <View style={{ flexDirection: "row" }}>
      <FontAwesome name={icon} size={24} color="gray" />
      <Text style={{ marginLeft: 5, color: "gray", fontWeight: "500" }}>
        {text}
      </Text>
    </View>
  );
}
export default function PostListItem({ post }: PostListItemProps) {
  return (
    <Link href={`/posts/${post.id}`} asChild>
      <Pressable>
        {/* Header */}
        <View style={styles.header}>
          <Image source={{ uri: post.author.image }} style={styles.userImage} />
          <View>
            <Text style={styles.username}>{post.author.name}</Text>
            <Text>{post.author.position}</Text>
          </View>
        </View>
        {/* Text content */}
        <Text style={styles.content}>{post.content}</Text>

        {/* Image content */}

        {post.image && (
          <Image source={{ uri: post.image }} style={styles.postImage} />
        )}
        {/* Footer content */}
        <View style={styles.footer}>
          {/* LIke */}
          <FooterButton text="Like" icon="thumbs-o-up" />
          {/* COmment */}
          <FooterButton text="Comment" icon="comment-o" />
          {/* Share */}
          <FooterButton text="Share" icon="share" />
        </View>
      </Pressable>
    </Link>
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
  /* BOdy */
  content: {
    margin: 10,
    marginTop: 0,
  },
  postImage: {
    width: "100%",
    aspectRatio: 1,
  },
  /* footer */
  footer: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-around",
    borderTopWidth: 0.5,
    borderColor: "Lightgray",
  },
});
