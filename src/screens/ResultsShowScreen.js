import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);

  const id = navigation.getParam("id");

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{result.name}</Text>
      <FlatList
        keyExtractor={photo => photo}
        data={result.photos}
        renderItem={({ item }) => (
          <Image style={styles.imageStyle} source={{ uri: item }} />
        )}
      />
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 16
  },
  imageStyle: {
    height: 150,
    width: 250,
    borderRadius: 10,
    marginVertical: 10
  }
});
