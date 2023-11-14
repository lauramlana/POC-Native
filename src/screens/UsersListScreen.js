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
        `https://api.github.com/users?since=${lastID}&per_page=10`
      );
      setData((prevData) => [...prevData, ...response.data]);
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
        if (data.length > 0) {
          const lastUser = data[data.length - 1];
          setLastID(lastUser.id);
        }
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



// PERGUNTAR AO RAFA
// import React, { useState, useEffect, useRef } from "react";
// import { Text, StyleSheet, View, FlatList, Image, Button } from "react-native";
// import axios from "axios";

// export default function UsersListScreen() {
//   const [data, setData] = useState([]);
//   const countRef = useRef(0);

//   useEffect(() => {
//     loadGitHubData();
//   }, []);

//   const loadGitHubData = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.github.com/users?since=${countRef.current}&per_page=10`
//       );
//       setData((prevData) => [...prevData, ...response.data]);
//       countRef.current += 10; 
//     } catch (error) {
//       console.error("Erro ao buscar dados do GitHub: ", error);
//     }
//   };

//   const renderListItem = ({ item }) => (
//     <View style={styles.itemContainer}>
//       <Image source={{ uri: item.avatar_url }} style={styles.avatar} />
//       <View style={styles.textContainer}>
//         <Text style={styles.loginText}>{item.login} - {item.id}</Text>
//         <Text style={styles.bioText}>{item.url}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={data}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderListItem}
//         onEndReached={() => {
//           loadGitHubData();
//         }}
//         onEndReachedThreshold={0.6}
//       />
//       <Button title="Carregar mais" onPress={loadGitHubData} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   itemContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 10,
//   },
//   textContainer: {
//     flex: 1,
//   },
//   loginText: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   bioText: {
//     fontSize: 14,
//   },
// });
