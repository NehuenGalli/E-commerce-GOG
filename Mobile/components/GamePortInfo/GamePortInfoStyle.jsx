import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";
import AddToCart from "../PortAddToCart/portAddToCart";
import { userCurrent } from "../../services/userServices";
import { userContext } from "../../context/userContext";
import ModalTags from "./ModalTags"; 

const GamePortInfo = ({ game, isLoggedIn }) => {
  const [userGames, setUserGames] = useState([]);
  const [loading, setLoading] = useState(isLoggedIn);
  const [showTagsModal, setShowTagsModal] = useState(false);
  const { getToken } = useContext(userContext);

  useEffect(() => {
    const fetchUserGames = async () => {
      if (!isLoggedIn) {
        setLoading(false);
        return;
      }

      try {
        const token = await getToken();
        const user = await userCurrent(token);
        setUserGames(user?.games || []);
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
    return (
      <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 50 }} />
    );
  }

  if (!game) {
    return (
      <View style={styles.centered}>
        <Text>Game information not available.</Text>
      </View>
    );
  }

  const userHasGame =
    isLoggedIn && userGames.some((userGame) => userGame.id === game.id);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: game.mainImage }} style={styles.mainImage} />

      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>
          Developer: {game.developer?.name || "N/A"}
        </Text>

        {game.website && (
          <TouchableOpacity onPress={() => Linking.openURL(game.website)}>
            <Text style={styles.linkText}>{game.website}</Text>
          </TouchableOpacity>
        )}

        <Text style={styles.detailText}>
          Release date: {new Date(game.releaseDate).toLocaleDateString()}
        </Text>

        <View style={styles.tagsSection}>
          <Text style={styles.tagsLabel}>Tags:</Text>
          <View style={styles.tagsContainer}>
            {game.tags?.slice(0, 5).map((tag) => (
              <View key={tag.id} style={styles.tag}>
                <Text style={styles.tagText}>{tag.name}</Text>
              </View>
            ))}
          </View>

          {game.tags?.length > 5 && (
            <TouchableOpacity onPress={() => setShowTagsModal(true)}>
              <Text style={styles.moreLink}>+ {game.tags.length - 5} more</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {!userHasGame && isLoggedIn && <AddToCart game={game} />}

      <ModalTags
        tags={game.tags}
        visible={showTagsModal}
        onClose={() => setShowTagsModal(false)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
   
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainImage: {
    width: "100%",
    height: 250,
    marginBottom: 16,
   
  },
  detailsContainer: {
    paddingBottom: 24,
    marginHorizontal: 16
  },
  detailText: {
    fontSize: 20,
    marginBottom: 8,
     fontWeight:"bold"
    
  },
  linkText: {
    color: "black",
    fontSize: 16,
    marginBottom: 8,
    textDecorationLine: "underline",
    fontWeight:"bold"
  },
  tagsSection: {
    marginTop: 8,
  },
  tagsLabel: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
   
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 8,
  },
  tag: {
    marginRight: 4,
    marginBottom: 4,
    paddingVertical: 3,
    paddingHorizontal: 6,
 
  },
  tagText: {
    color: "#333",
    fontSize: 14,
  },
  moreLink: {
    color: "#333",
    textDecorationLine: "underline",
    fontSize: 16,
  },
});

export default GamePortInfo;
