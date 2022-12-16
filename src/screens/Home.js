import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IMGS, ROUTES } from "../constants";
import Card from "../components/Card";
var width = Dimensions.get("window").width;
import { CATEGORY_DATA } from "../constants/categoryData";

const Home = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {CATEGORY_DATA.map((item, ind) => (
          <Card item={item} key={ind} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 5,
    padding: 2,
  },
  container: {
    marginBottom: 16,
    width: width,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
