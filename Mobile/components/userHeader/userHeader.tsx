import { View,Image, Text } from "react-native";
import { styles } from "./userHeader.styles";
import ActionButtons  from "./actionButtons";

const UserHeader = ({ user }: { user: any })  => {
   return (
    <>
      <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: user.image }}
          style={styles.image}
        />
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <View style={styles.actions}>
        <ActionButtons
        />
      </View>
    </View>
    </>
  );
};

export default UserHeader;
