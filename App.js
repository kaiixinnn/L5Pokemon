import React from 'react';
import { View, Text, SectionList, Image, Button, StatusBar, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const pokemonData = [
  {
    title: 'Electric',
    bgColor: '#FFF700', // Electric section background
    icon: 'bolt-lightning',
    data: [
      {
        key: 'Pikachu',
        num: '60',
      },
      {
        key: 'Voltorb',
        num: '21',
      },
    ],
  },
  {
    title: 'Water',
    bgColor: '#ADD8E6', // Water section background
    icon: 'droplet',
    data: [
      {
        key: 'Squirtle',
        num: '7',
      },
      {
        key: 'Psyduck',
        num: '54',
      },
    ],
  },
];

const renderItem = ({ item }) => {
  const imageLink = `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${item.num}-2x.png`;
  return (
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{item.key}</Text>
        <Image source={{ uri: imageLink }} style={styles.image} />
      </View>
  );
};

const App = () => {
  return (
      <View style={{ flex: 1, paddingTop: 30 }}>
        <StatusBar hidden={true} />
        <View style={styles.header}>
          <Button title="Add Pokemon" onPress={() => {}} />
        </View>
        <SectionList
            sections={pokemonData}
            keyExtractor={(item, index) => item.key + index}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, bgColor, icon } }) => (
                <View style={[styles.sectionHeader, { backgroundColor: bgColor }]}>
                  <Icon name={icon} size={30} color="black" style={{ marginRight: 10 }} />
                  <Text style={styles.sectionHeaderText}>{title.toUpperCase()}</Text>
                </View>
            )}
            contentContainerStyle={{ paddingHorizontal: 10 }}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20, // Increased padding for larger card size
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
  },
  image: {
    width: 240, // Doubled image width
    height: 320, // Doubled image height
    marginLeft: 'auto', // Push image to the right
  },
  cardTitle: {
    fontSize: 24, // Larger font for card title
    fontWeight: '600',
    flex: 1, // Take up remaining space to keep layout balanced
  },
});

export default App;
