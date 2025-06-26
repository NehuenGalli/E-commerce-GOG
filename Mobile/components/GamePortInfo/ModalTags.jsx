import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./modalTags.style";

const ModalTags = ({ tags, visible, onClose }) => {
  const uniqueTags = tags.filter(
    (tag, index, self) => index === self.findIndex((t) => t.id === tag.id)
  );
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>All Tags</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>X</Text>
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={styles.modalBody}>
            {uniqueTags.map((tag) => (
              <View key={tag.id} style={styles.modalTag}>
                <Text style={styles.modalTagText}>{tag.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default ModalTags;
