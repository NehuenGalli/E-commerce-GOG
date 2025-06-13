
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./userHeader.styles";

const ActionButtons = (/*{ logOut, user, idUserLogged }*/) => {

  return (
    <>
      {/* {logOut && (
        <TouchableOpacity
         style={styles.buttonLogout}
          onPress={() => {
            logOutFunction(logOut, navigate);
          }}
        >
          <Text style={{ color: "#fff" }}>Logout</Text>
        </TouchableOpacity>
      )}

      {!logOut && (
        <AddOrRemoveFriend userId={user.id} idUserLogged={idUserLogged} />
      )} */}
    </>
  );
};

export default ActionButtons;