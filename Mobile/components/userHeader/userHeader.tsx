import { View, Image, Text } from "react-native";
import { styles } from "./userHeader.styles";
import ActionButtons from "./actionButtons";

const UserHeader = ({ user }: { user: any }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: user.image }}
            style={styles.image}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{user.name}</Text>
          <View style={styles.actions}>
            <ActionButtons />
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserHeader;