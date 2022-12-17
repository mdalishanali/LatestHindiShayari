import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  VirtualizedList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import ShyariCard from "../components/ShyariCard";
import { loveShayari } from "../shyariDB/love";
import { DostiShayari } from "../shyariDB/dost";

const ListShayari = () => {
  const route = useRoute();
  const category = route.params.category;
  const [data, setData] = useState([]);
  useEffect(() => {
    switch (category) {
      case "Love Shayari":
        setData(loveShayari);
        break;
      case "Dosti Shayari":
        setData(DostiShayari);
        break;
      default:
        break;
    }
  }, []);

  const getItem = (data, index) => data[index];

  return (
    <VirtualizedList
      data={data}
      initialNumToRender={4}
      renderItem={({ item }) => <ShyariCard title={item.title} key={item.id} />}
      keyExtractor={(item, index) => index}
      getItemCount={(data) => data.length}
      getItem={getItem}
    />
  );
};

export default ListShayari;

const styles = StyleSheet.create({});
