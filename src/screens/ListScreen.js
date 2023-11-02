import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList, Image, Button } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import animes from "../assets/mock";

export default function ListScreen(props) {
  console.log(props);
  const [selectedCategory, setSelectedCategory] = useState("all"); 
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.headerStyle}>ListScreen View</Text>
      <Text style={styles.info}>Filter by type</Text>
      <RNPickerSelect
        onValueChange={(value) => setSelectedCategory(value)}
        items={[
          { label: "All", value: "all" },
          { label: "Esporte", value: "Sport" },
          { label: "Seinen", value: "Seinen" },
          { label: "Shounen", value: "Shounen" },
          { label: "Shoujo", value: "Shoujo" },
          { label: "Suspense", value: "Suspense" },
        ]}
        value={selectedCategory}
      />

      <FlatList
        keyExtractor={(animes) => animes.id}
        data={animes}
        renderItem={({ item }) => {
          if (selectedCategory === "all" || item.type === selectedCategory) {
            return (
              <View>
                <Text style={styles.title}>{item.name}</Text>
                <Image style={styles.image} source={{ uri: item.photo }} />
                <Text style={styles.info}>{item.type}</Text>
                <Button
                  title="detalhes"
                  onPress={() =>
                    props.navigation.navigate("Detail", {
                      id: item.id,
                    })
                  }
                ></Button>
              </View>
            );
          } else {
            return null;
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 25,
    marginBottom: 5,
    marginHorizontal: 80,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  info: {
    fontSize: 15,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  image: {
    width: "auto",
    height: 100,
    marginHorizontal: 20,
    marginTop: 10,
  },
});
