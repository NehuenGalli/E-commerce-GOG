import { View, Image, Text } from "react-native";
import { styles } from "./userHeader.styles";
import ActionButtons from "./actionButtons";

const UserHeader = ({ user }: { user: any }) => {
  return (
    <View style={styles.userHeaderContainer}>
      <Image source={{ uri: user.image }} style={styles.image} />
      <View style={styles.userInfo}>
        <Text style={styles.name}>{user.name}</Text>
        <ActionButtons />
      </View>
    </View>
  );
};

export default UserHeader;
