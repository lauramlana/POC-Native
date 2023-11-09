import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";
import axios from "axios";

export default function UsersListScreen() {
  const [data, setData] = useState([]);
  const [lastID, setLastID] = useState(1);

  useEffect(() => {
    loadGitHubData();
  }, [lastID]);

  const loadGitHubData = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users?since=${lastID}per_page=10`
      );
      setData([...data, ...response.data]);
      
    } catch (error) {
      console.error("Erro ao buscar dados do GitHub: ", error);
    }
  };

  const renderListItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.avatar_url }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.loginText}>{item.login} - {item.id}</Text>
        <Text style={styles.bioText}>{item.url}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderListItem}
      onEndReached={() => {
        var lastUser = data.pop();
        setLastID(lastUser?.id)
      }}
      onEndReachedThreshold={0.6}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  loginText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bioText: {
    fontSize: 14,
  },
});
