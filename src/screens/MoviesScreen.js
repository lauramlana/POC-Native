import React, { useState, useEffect } from "react";
import { Text, StyleSheet, FlatList, View, Image, Button } from "react-native";
import { fetchTopRated, fetchTrending, fetchUpcoming } from "../api/moviebd";
// import { FlashList } from "@shopify/flash-list";

export default function ListScreen(props) {
  const [trending, setTrending] = useState([]);
//   const [upcoming, setUpcoming] = useState([]);
//   const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    getTrendingMovies();
    // getUpcomingMovies();
    // getTopRatedMovies();
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetchTrending();
    console.log("trending", data);
    if (data && data.results) setTrending(data.results);
  };

//   const getUpcomingMovies = async ()=>{
//     const data = await fetchUpcoming();
//     console.log('got upcoming', data.results.length)
//     if(data && data.results) setUpcoming(data.results);
//   }

//   const getTopRatedMovies = async ()=>{
//     const data = await fetchTopRated();
//     console.log('got top rated', data.results.length)
//     if(data && data.results) setTopRated(data.results);
//   }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Movies Screen View</Text>
      <FlatList
        data={trending}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              style={styles.movieImage}
            />
            <Text style={styles.movieTitle}>{item.title}</Text>
            <Button
              title="Detalhes"
              onPress={() =>
                props.navigation.navigate("MovieDetail", {
                    title: item.title,
                    overview: item.overview,
                    poster_path: item.poster_path,
                    release_date: item.release_date,
                    vote_average: item.vote_average,
                  })
              }
            />
          </View>
        )}
      />
    </View>
  );
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f0f0f0",
    },
    header: {
      fontSize: 28,
      fontWeight: "bold",
      marginHorizontal: 20,
      marginTop: 20,
      marginBottom: 10,
      textTransform: "uppercase",
      textAlign: "center",
    },
    movieItem: {
      backgroundColor: "white",
      borderRadius: 10,
      margin: 10,
      padding: 10,
      flexDirection: "column", 
    },
    movieImage: {
      width: "100%", 
      height: 200, 
      borderRadius: 5,
    },
    movieTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginVertical: 10,
    },
    movieOverview: {
      marginLeft: 10,
    },
    buttonContainer: {
      marginTop: 10,
      width: "100%",
    },
  });
  
  
