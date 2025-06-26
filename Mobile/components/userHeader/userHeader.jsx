import { Image, Text, View } from "react-native";
import ActionButtons from "./actionButtons";
import { styles } from "./userHeader.styles";

const UserHeader = ({ user, displayLogoutButton }) => {
  return (
    <View style={styles.userHeaderContainer}>
      <Image source={{ uri: user.image }} style={styles.image} />
      <View style={styles.userInfo}>
        <Text style={styles.name}>{user.name}</Text>
        <ActionButtons
          displayLogoutButton={displayLogoutButton}
          userId={user.id}
        />
      </View>
    </View>
  );
};

export default UserHeader;
