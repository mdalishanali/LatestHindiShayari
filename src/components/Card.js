import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, IMGS } from "../constants";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../constants/routes";

const { width } = Dimensions.get("screen");

const Card = ({ item: { name, logo } }) => {
  const navigation = useNavigation();
  const navigateDetailsPage = (name) => {
    navigation.navigate(ROUTES.ListShayari, { category: name });
  };
  return (
    <TouchableOpacity onPress={() => navigateDetailsPage(name)}>
      <View style={styles.card}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    height: 190,
    width: width / 2 - 10,
    backgroundColor: COLORS.secondery,
    display: "flex",
    borderWidth: 4,
    borderColor: "#20232a",
    padding: 20,
    marginBottom: 10,
    borderColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 20,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 120,
    width: width / 3,
    alignItems: "center",
  },
  title: {
    color: COLORS.white,
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
    borderColor: COLORS.white,
    // borderWidth: 1,
  },
});
