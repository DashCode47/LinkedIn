import { StyleSheet, TextInput, Pressable, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Text, View } from "../../components/Themed";
import { useNavigation, useRouter } from "expo-router";
import { useLayoutEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function NewPostScreen() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const navigation = useNavigation();
  const router = useRouter();
  const onPost = () => {
    console.warn("Posting..");
    router.push("/(tabs)/");
    setContent("");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={onPost} style={styles.postButton}>
          <Text style={styles.btnText}>Submit</Text>
        </Pressable>
      ),
    });
  }, [onPost]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={content}
        placeholder="hellol guys"
        style={styles.input}
        multiline
        onChangeText={setContent}
      />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.footer}>
        <Pressable style={styles.iconbtn} onPress={pickImage}>
          <FontAwesome name="image" size={24} color="black" />
        </Pressable>
        <Pressable style={styles.iconbtn}>
          <FontAwesome name="camera" size={24} color="black" />
        </Pressable>
        <Pressable style={styles.iconbtn}>
          <FontAwesome name="glass" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    fontSize: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  /* header */
  postButton: {
    backgroundColor: "royalblue",
    padding: 5,
    borderRadius: 50,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
  footer: {
    marginTop: "auto",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconbtn: {
    backgroundColor: "gainsboro",
    padding: 20,
    borderRadius: 100,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginTop: "auto",
  },
});
