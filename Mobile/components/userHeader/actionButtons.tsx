
import {  Text, Pressable } from "react-native";
import { styles } from "./userHeader.styles";
import { useContext } from "react";
import { userContext } from "@/context/userContext";
import { useNavigateTo } from "@/hooks/useNavigateTo";

const ActionButtons = () => {

   const { logOut } = useContext(userContext);
      const { navigateToLogin } = useNavigateTo();

  return (
    <>
        
        <Pressable
          onPress={() => {
           logOut();
           navigateToLogin();

          }}
        >
          <Text  style={styles.buttonLogout}>Logout</Text>
        </Pressable>

     
    </>
  );
};

export default ActionButtons;