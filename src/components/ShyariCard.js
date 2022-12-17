import {
  Linking,
  Share,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo } from "react";
import { COLORS } from "../constants";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";

const ShyariCard = ({ title }) => {
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(title);
    ToastAndroid.show("Copy successfully!", ToastAndroid.BOTTOM);
  };

  const socialShare = async () => {
    await Share.share({
      title: "Shayari",
      message: title,
    });
  };

  const tweetNow = () => {
    const url = "https://twitter.com/intent/tweet?text=" + title;
    Linking.openURL(url);
  };
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.shayariText}>{title}</Text>
      </View>
      <View style={styles.btnParent}>
        <View style={styles.btnCont}>
          <TouchableOpacity onPress={socialShare}>
            <FontAwesome name="share-square-o" style={styles.btnIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={copyToClipboard}>
            <FontAwesome5 name="copy" style={styles.btnIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={tweetNow}>
            <FontAwesome name="twitter" style={styles.btnIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default memo(ShyariCard);

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.secondery,
    margin: 10,
    borderRadius: 20,
    borderColor: "#6A6767",
    borderWidth: 1,
  },
  shayariText: {
    padding: 20,
    color: COLORS.white,
    fontSize: 25,
    textAlign: "center",
  },
  btnParent: {
    borderColor: COLORS.white,
    borderTopWidth: 1,
    borderStyle: "dotted",
    backgroundColor: "#1F232D",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  btnCont: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 5,
  },
  btnIcon: {
    color: COLORS.white,
    fontSize: 30,
    padding: 10,
  },
});
