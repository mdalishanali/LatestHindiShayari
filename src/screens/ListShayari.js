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
import { funnyShayari } from "../shyariDB/funny";
import { attitudeShayari } from "../shyariDB/attitude";
import { bewafaShayari } from "../shyariDB/bewafa";
import { dardShayari } from "../shyariDB/dard";
import { hindiShayari } from "../shyariDB/hindi";
import { motivationalShyari } from "../shyariDB/motivational";
import { romanticShayari } from "../shyariDB/romantic";
import { gulzaarShayari } from "../shyariDB/gulzaar";
import { sadShayari } from "../shyariDB/sad";
import { twoLineShayari } from "../shyariDB/twoLine";
import InterstitialAdComponent from "../components/InrestialAdsComp";

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
      case "Funny Shayari":
        setData(funnyShayari);
        break;
      case "Attitude Shayari":
        setData(attitudeShayari);
        break;
      case "Bewafa Shayari":
        setData(bewafaShayari);
        break;
      case "Dard Shayari":
        setData(dardShayari);
        break;
      case "Hindi Shayari":
        setData(hindiShayari);
        break;
      case "Motivational Shayari":
        setData(motivationalShyari);
        break;
      case "Romantic Shayari":
        setData(romanticShayari);
        break;
      case "Gulzaar Shayari":
        setData(gulzaarShayari);
        break;
      case "Sad Shayari":
        setData(sadShayari);
        break;
      case "Two Line Shayari":
        setData(twoLineShayari);
        break;
      default:
        break;
    }
  }, []);

  const getItem = (data, index) => data[index];

  return (
    <>
      <InterstitialAdComponent />
      <VirtualizedList
        data={data}
        initialNumToRender={4}
        renderItem={({ item }) => (
          <ShyariCard title={item.title} key={item.id} />
        )}
        keyExtractor={(item, index) => index}
        getItemCount={(data) => data.length}
        getItem={getItem}
      />
    </>
  );
};

export default ListShayari;

const styles = StyleSheet.create({});
