import React from "react";
import { Text, StyleSheet, View, FlatList, Image, Button } from "react-native";

export default function ListScreen() {
const animes = [
        {
          id: 0,
          name: 'Naruto Shippuden',
          photo: 'https://i.pinimg.com/236x/8d/5a/4f/8d5a4fffc9ef16404beb1aadc0ef0926.jpg',
          streaming: "Netflix",
          episodes: 100,
          type: "Shounen"
        },
        {
          id: 1,
          name: 'One Piece',
          photo: 'https://gekkougear.files.wordpress.com/2012/09/7826_one_piece.jpg',
          streaming: "Netflix",
          episodes: 100,
          type: "Shounen"
        },
        {
            id: 2,
            name: 'Kuroku no Basket',
            photo: 'https://s2-techtudo.glbimg.com/JE3gR3drixl7Qzg_3-7-gJCPyfU=/0x0:1200x675/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/4/u/3rAWpYSSSQBDjbqs9Y7g/2aebbcb9bd40255732bd026ef54f7d3b.jpg',
            streaming: "Netflix",
            episodes: 100,
            type: "Sport"  
          },
          {
            id: 3,
            name: 'Dragon Ball',
            photo: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/36bdc5ea4443cd8e42f22ec7d3884cbb.jpe',
            streaming: "Netflix",
            episodes: 100,
            type: "Shounen"
          },
          {
            id: 4,
            name: 'Fullmetal Alchemist Brotherhood',
            photo: `https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/0662921aa3b81ff85737ddeb56deefab.jpe`,
            streaming: "Netflix",
            episodes: 100,
            type: "Shounen"
          },
          {
            id: 5,
            name: 'Demon Slayer',
            photo: `https://image.api.playstation.com/vulcan/ap/rnd/202106/1704/JzL1NLQvok7Pghe9W5PP2XNV.png`,
            streaming: "Netflix",
            episodes: 100,
            type: "Shounen"
          },
          {
            id: 6,
            name: 'Hunte X Hunter',
            photo: `https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/cbb55a6382682bf71e91f685c6473c5a.jpe`,
            streaming: "Netflix",
            episodes: 100,
            type: "Shounen"
          },
          {
            id: 7,
            name: 'Fairy Tail',
            photo: `https://www.einerd.com.br/wp-content/uploads/2019/10/Fairy-Tail-capa-890x466.jpg`,
            streaming: "Netflix",
            episodes: 100,
            type: "Shounen"
          },
    ]
return (
    <View style={{flex: 1}} > 
        <Text style={styles.headerStyle}>
            ListScreen View
        </Text>
        <FlatList 
        keyExtractor={animes => animes.id}
        data={animes}
        renderItem={({item}) => {
            return (
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <Image style={styles.image} source={{uri: item.photo}} />
                    <Text style={styles.info}>{item.type}</Text>
                    <Button 
                        title='detalhes'
                    ></Button>
                </View>
            )
        }}
        />       
    </View>
)
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 25,
        marginBottom: 5,
        marginHorizontal: 80
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 20
    },
    info: {
        fontSize: 15,
        marginHorizontal: 20,
        marginBottom: 10,
    },
    image: {
      width: 'auto', 
      height: 100,
      marginHorizontal: 20,
      marginTop: 10,
    }
});