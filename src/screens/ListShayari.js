import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";

const ListShayari = () => {
  const route = useRoute();
  const category = route.params.category;
  const [data, setData] = useState([]);
  switch (category) {
    case "value":
      break;

    default:
      break;
  }
  return (
    <View>
      <Text>ListShayari:{data}</Text>
    </View>
  );
};

export default ListShayari;

const styles = StyleSheet.create({});
