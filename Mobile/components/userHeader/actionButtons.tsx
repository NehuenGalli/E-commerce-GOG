
import {  Text, Pressable } from "react-native";
import { styles } from "./userHeader.styles";
import { useContext } from "react";
import { userContext } from "@/context/userContext";

const ActionButtons = () => {

   const { logOut } = useContext(userContext);

  return (
    <>
      
        <Pressable
          // onPress={() => {
          //   logOutFunction(logOut());
          // }}
        >
          <Text  style={styles.buttonLogout}>Logout</Text>
        </Pressable>

     
    </>
  );
};

export default ActionButtons;