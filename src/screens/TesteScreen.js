import React from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';

const RestaurantItem = ({ restaurant }) => (
    <View style={styles.restaurantItem}>
      <Text style={styles.restaurantText}>{restaurant.name}</Text>
      <ScrollView horizontal>
        <FlatList
          data={restaurant.menuItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MenuItem name={item.name} />}
          horizontal
        />
      </ScrollView>
    </View>
  );

  const MenuItem = ({ name }) => (
    <View style={styles.menuItem}>
      <Text style={styles.menuText}>{name}</Text>
    </View>
  );

export default function TesteScreen() {

    const restaurantData = [
        {
            id: '1',
            name: 'Restaurant 1',
            menuItems: [
              { id: '1', name: 'Dish 1A' },
              { id: '2', name: 'Dish 1B' },
              { id: '3', name: 'Dish 1A' },
              { id: '4', name: 'Dish 1B' },
              { id: '5', name: 'Dish 1A' },
              { id: '6', name: 'Dish 1B' },
            ],
          },
          {
            id: '2',
            name: 'Restaurant 2',
            menuItems: [
              { id: '1', name: 'Dish 2A' },
              { id: '2', name: 'Dish 2B' },
              { id: '3', name: 'Dish 2A' },
              { id: '4', name: 'Dish 2B' },
              { id: '5', name: 'Dish 2A' },
              { id: '6', name: 'Dish 2B' },
              { id: '7', name: 'Dish 2A' },
              { id: '8', name: 'Dish 2B' },
            ],
          },
          {
            id: '3',
            name: 'Restaurant 3',
            menuItems: [
              { id: '1', name: 'Dish 3A' },
              { id: '2', name: 'Dish 3B' },
              { id: '3', name: 'Dish 3A' },
              { id: '4', name: 'Dish 3B' },
              { id: '5', name: 'Dish 3A' },
              { id: '6', name: 'Dish 3B' },
              { id: '7', name: 'Dish 3A' },
              { id: '8', name: 'Dish 3B' },
            ],
          },
          {
            id: '4',
            name: 'Restaurant 4',
            menuItems: [
              { id: '1', name: 'Dish 4A' },
              { id: '2', name: 'Dish 4B' },
              { id: '3', name: 'Dish 4A' },
              { id: '4', name: 'Dish 4B' },
              { id: '5', name: 'Dish 4A' },
              { id: '6', name: 'Dish 4B' },
              { id: '7', name: 'Dish 4A' },
              { id: '8', name: 'Dish 4B' },
            ],
          },
          {
            id: '5',
            name: 'Restaurant 5',
            menuItems: [
              { id: '1', name: 'Dish 5A' },
              { id: '2', name: 'Dish 5B' },
              { id: '3', name: 'Dish 5A' },
              { id: '4', name: 'Dish 5B' },
              { id: '5', name: 'Dish 5A' },
              { id: '6', name: 'Dish 5B' },
              { id: '7', name: 'Dish 5A' },
              { id: '8', name: 'Dish 5B' },
            ],
          },
          {
            id: '6',
            name: 'Restaurant 6',
            menuItems: [
              { id: '1', name: 'Dish 6A' },
              { id: '2', name: 'Dish 6B' },
              { id: '3', name: 'Dish 6A' },
              { id: '4', name: 'Dish 6B' },
              { id: '5', name: 'Dish 6A' },
              { id: '6', name: 'Dish 6B' },
              { id: '7', name: 'Dish 6A' },
              { id: '8', name: 'Dish 6B' },
            ],
          },
          {
            id: '7',
            name: 'Restaurant 7',
            menuItems: [
              { id: '1', name: 'Dish 7A' },
              { id: '2', name: 'Dish 7B' },
              { id: '3', name: 'Dish 7A' },
              { id: '4', name: 'Dish 7B' },
              { id: '5', name: 'Dish 7A' },
              { id: '6', name: 'Dish 7B' },
              { id: '7', name: 'Dish 7A' },
              { id: '8', name: 'Dish 7B' },
            ],
          },
          {
            id: '8',
            name: 'Restaurant 8',
            menuItems: [
              { id: '1', name: 'Dish 8A' },
              { id: '2', name: 'Dish 8B' },
              { id: '3', name: 'Dish 8A' },
              { id: '4', name: 'Dish 8B' },
              { id: '5', name: 'Dish 8A' },
              { id: '6', name: 'Dish 8B' },
              { id: '7', name: 'Dish 8A' },
              { id: '8', name: 'Dish 8B' },
            ],
          },
      ];
    
      return (
        <View style={styles.container}>
        <FlatList
          data={restaurantData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <RestaurantItem restaurant={item} />}
          horizontal={false}
        />
      </View>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
    },
    restaurantItem: {
      margin: 10,
      padding: 10,
      backgroundColor: 'lightgrey',
      width: 300,
      borderRadius: 10,
    },
    restaurantText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    menuItem: {
      margin: 10,
      padding: 10,
      backgroundColor: 'lightblue',
      width: 150,
      borderRadius: 10,
    },
    menuText: {
      fontSize: 14,
    },
  });