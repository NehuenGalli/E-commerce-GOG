import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";

const AddOrRemoveFriend = () => {
  const [isFriendBool, setIsFriendBool] = useState(null);

  //   const functionAddOrRemoveFriend = () => {
  //     addOrRemoveF(userId, isFriendBool)
  //       .then((message) => {
  //         toast.success(message);
  //         setIsFriendBool((prev) => !prev);
  //       })
  //       .catch((error) => toast.error(error));
  //   };

  return (
    <>
      {!isFriendBool && (
        <TouchableOpacity
          style={{
            backgroundColor: "#007bff",
            padding: 10,
            borderRadius: 5,
          }}
          //onPress={() => functionAddOrRemoveFriend()}
        >
          <Text style={{ color: "#fff" }}>Add Friend</Text>
        </TouchableOpacity>
      )}

      {isFriendBool && (
        <TouchableOpacity
          style={{
            backgroundColor: "#dc3545",
            padding: 10,
            borderRadius: 5,
          }}
          //onPress={() => functionAddOrRemoveFriend()}
        >
          <Text style={{ color: "#fff" }}>Remove Friend</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default AddOrRemoveFriend;
