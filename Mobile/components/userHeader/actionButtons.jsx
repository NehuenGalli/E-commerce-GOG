
import {  Text, Pressable } from "react-native";
import { styles } from "./userHeader.styles";
import { useContext } from "react";
import { userContext } from "@/context/userContext";
import { useNavigateTo } from "@/hooks/useNavigateTo";
import AddOrRemoveFriend from "./addOrRemoveFriend";

const ActionButtons = ({displayLogoutButton, userId}) => {

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
          <Text  style={styles.buttonLogout}>Logout</Text>
        </Pressable>

        ) :(

          <AddOrRemoveFriend userId={userId}></AddOrRemoveFriend>
       
        )}
     

     
    </>
  );
};

export default ActionButtons;