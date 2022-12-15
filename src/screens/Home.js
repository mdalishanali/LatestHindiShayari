import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../constants";
import Card from "../components/Card";

const Home = () => {
  const navigation = useNavigation();
  const navigateDetailsPage = () => {
    navigation.navigate(ROUTES.ListShayari, { category: "dard" });
  };
  return (
    <View>
      <TouchableOpacity onPress={navigateDetailsPage}>
        <Card />
        <Text>
          LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
