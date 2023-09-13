import { View, Text } from "react-native";
import React from "react";
import { Post } from "../types";

type PostListItem = {
  post: Post;
};

export default function PostListItem({ post }: PostListItem) {
  return <Text>{post.content}</Text>;
}
