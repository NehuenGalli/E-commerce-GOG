import { userContext } from "@/context/userContext";
import { useNavigateTo } from "@/hooks/useNavigateTo";
import { useContext } from "react";
import { Pressable, Text } from "react-native";
import AddOrRemoveFriend from "./addOrRemoveFriend";
import { styles } from "./userHeader.styles";

const ActionButtons = ({ displayLogoutButton, userId }) => {
  const { logOut } = useContext(userContext);
  const { navigateToLogin } = useNavigateTo();

  return (
    <>
      {displayLogoutButton ? (
        <Pressable
          onPress={() => {
            logOut();
            navigateToLogin();
          }}
        >
          <Text style={styles.buttonLogout}>Logout</Text>
        </Pressable>
      ) : (
        <AddOrRemoveFriend userId={userId}></AddOrRemoveFriend>
      )}
    </>
  );
};

export default ActionButtons;
