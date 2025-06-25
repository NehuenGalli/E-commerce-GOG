import { useState, useEffect, useContext} from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./userHeader.styles";
import { userContext } from "../../context/userContext";
import { addOrRemoveF } from "../../services/userServices";
import { isFriend } from "../../utilities/isFriend";
import Toast from "react-native-toast-message";

const AddOrRemoveFriend = ({ userId }) => {
  const [isFriendBool, setIsFriendBool] = useState(null);

  const { idUser, getToken } = useContext(userContext);

  const functionAddOrRemoveFriend = () => {
    getToken().then((token) =>
      addOrRemoveF(userId, isFriendBool, token)
        .then((message) => {
          Toast.show({
            type: "success",
            text1: "Success",
            text2: message,
          });
          setIsFriendBool((prev) => !prev);
        })
        .catch((error) =>
          Toast.show({
            type: "error",
            text1: error,
          })
        )
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
            functionAddOrRemoveFriend();
          }}
        >
          <Text style={styles.buttonLogout}>AddFriend</Text>
        </Pressable>
      )}

      {isFriendBool && (
        <Pressable
          onPress={() => {
            functionAddOrRemoveFriend();
          }}
        >
          <Text style={styles.buttonRemoveFriend}>Remove Friend</Text>
        </Pressable>
      )}
    </>
  );
};

export default AddOrRemoveFriend;
