import React, { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator, ScrollView, TouchableOpacity, Linking, StyleSheet } from "react-native";
import {AddToCart} from "../PortAddToCart/portAddToCart";

const GamePortInfo = ({ game, isLoggedIn }) => {
  const [userGames, setUserGames] = useState([]);
  const [loading, setLoading] = useState(isLoggedIn); 

  useEffect(() => {
    const fetchUserGames = async () => {
      if (!isLoggedIn) {
        setLoading(false);
        return;
      }

      try {
        // const user = await userCurrent();
        // setUserGames(user?.games || []);
      } catch (error) {
        console.error("Failed to fetch user games:", error);
        setUserGames([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUserGames();
  }, [isLoggedIn]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 50 }} />;
  }

  if (!game) {
    return (
      <View style={styles.centered}>
        <Text>Game information not available.</Text>
      </View>
    );
  }

  const userHasGame = isLoggedIn && userGames.some((userGame) => userGame.id === game.id);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: game.mainImage }}
        style={styles.mainImage}
      />
      
    

      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>Developer: {game.developer?.name || 'N/A'}</Text>
        
        {game.website && (
          <TouchableOpacity onPress={() => Linking.openURL(game.website)}>
            <Text style={styles.linkText}>{game.website}</Text>
          </TouchableOpacity>
        )}

        <Text style={styles.detailText}>Release date: {new Date(game.releaseDate).toLocaleDateString()}</Text>

        <View style={styles.tagsSection}>
          <Text style={styles.tagsLabel}>Tags: </Text>
          <View style={styles.tagsContainer}>
            {game.tags?.slice(0, 5).map((tag) => (
              <View key={tag.id} style={styles.tag}>
                <Text style={styles.tagText}>{tag.name}</Text>
              </View>
            ))}
          </View>
          {game.tags?.length > 5 && (
            <Text style={styles.moreLink}>+ {game.tags.length - 5} more</Text>
          )}
        </View>
      </View>

      {!userHasGame && isLoggedIn && <AddToCart game={game} />} 
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  
  mainImage: {
    width: '100%',
    height: 250,
    marginBottom: 16,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  price: {
    fontSize: 20,
    color: '#27ae60',
    fontWeight: 'bold',
  },
 
  detailText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  linkText: {
    color: '#3498db',
    fontSize: 16,
    marginBottom: 8,
    textDecorationLine: 'underline',
  },
  tagsSection: {
    marginTop: 8,
  },
  tagsLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#555',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  tag: {
    marginRight: 8,
    marginBottom: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  
  },
  tagText: {
    color: '#333',
    fontSize: 14,
  },
  moreLink: {
    color: '#333',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});

export default GamePortInfo;