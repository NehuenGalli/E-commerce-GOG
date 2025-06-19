import React, { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator, ScrollView, TouchableOpacity, Linking } from "react-native";

//import { userCurrent } from "../../services/userService";

import { GameT } from "../../types/game";

//import AddToCart from "../portAddToCart/AddToCart";

type GamePortInfoProps = {
  game: GameT;
  isLoggedIn: boolean;
}

const GamePortInfo: React.FC<GamePortInfoProps> = ({
  game,
  isLoggedIn,
}) => {
  const [userGames, setUserGames] = useState<GameT[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserGames = async () => {
      if (!isLoggedIn) {
        setUserGames([]);
        setLoading(false);
        return;
      }

     {/* try {
        const user = await userCurrent();
        setUserGames(user?.games || []);
      } catch (error: any) {
        console.error(error);
        setUserGames([]);
      } finally {
        setLoading(false);
      }*/}
    };

    fetchUserGames();
  }, [isLoggedIn]);

  const userHasGame = isLoggedIn && userGames.some((userGame) => userGame.id === game.id);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;

  return (
    <ScrollView style={{ padding: 16 }}>
      {/* Imagen principal */}
      <View style={{ alignItems: "center", marginBottom: 16 }}>
        <Image
          source={{ uri: game.mainImage }}
          style={{ width: "100%", height: 250, borderRadius: 8, marginBottom: 12,opacity: 0.75 }}
        />
        <Text style={{ fontSize: 32, color: "white", fontWeight: "bold" }}>
          {game.name}
        </Text>
      </View>

      {/* Detalles */}
      <View style={{ marginBottom: 16 }}>
        <Text>Developer: {game.developer.name}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(game.website)}>
          <Text style={{ color: "blue" }}>{game.website}</Text>
        </TouchableOpacity>

        <Text>Release date: {new Date(game.releaseDate).toLocaleDateString()}</Text>

        <View style={{ marginTop: 8 }}>
          <Text>Tags: </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {game.tags.slice(0, 5).map((tag) => (
              <TouchableOpacity
                key={tag.id}
                onPress={() => {/* aquí iría la navegación hacia el tag */}}

                style={{ marginRight: 8, marginBottom: 8, padding: 4, backgroundColor: '#eee', borderRadius: 4 }}>
                <Text>{tag.name}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Botón opcional para el modal de tags si deseas implementarlo*/}
        </View>
      </View>

      {/* Botón para añadir al carro si el usuario NO tiene el juego 
      {!userHasGame && <AddToCart game={game} />}*/}
    </ScrollView>
  );
};

export default GamePortInfo;
