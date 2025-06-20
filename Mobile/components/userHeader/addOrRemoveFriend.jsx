import { useState } from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./userHeader.styles";
import { useContext } from "react";
import { userContext } from "../../context/userContext";
import { addOrRemoveF } from "../../services/userServices";
import { useEffect } from "react";
import { isFriend } from "../../utilities/isFriend";



const AddOrRemoveFriend = ({userId}) => {


  const [isFriendBool, setIsFriendBool] = useState(null);

  const { idUser, getToken } = useContext(userContext);


    const functionAddOrRemoveFriend = () => {
      getToken().then((token) =>
      addOrRemoveF(userId, isFriendBool, token)
        .then((message) => {
          console.log(message);
          setIsFriendBool((prev) => !prev);
        })
         .catch((error) => console.log(error))
    );
  };


    useEffect(() => {
    if (userId && idUser) {
      isFriend(userId, idUser).then(setIsFriendBool);
    }
  }, [userId, idUser]);


  return (
    <>
      {!isFriendBool && (

        <Pressable
           onPress={() => {
           functionAddOrRemoveFriend()
          }}
        >
          <Text  style={styles.buttonLogout}>AddFriend</Text>
        </Pressable>
      )}

      {isFriendBool && (
         <Pressable
           onPress={() => {
           functionAddOrRemoveFriend()
          }}
        >
          <Text  style={styles.buttonLogout}>Remove Friend</Text>
        </Pressable>
      )}
    </>
  );
};

export default AddOrRemoveFriend;
