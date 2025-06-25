import {
  Modal,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

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

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    maxHeight: "80%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  closeButton: {
    fontSize: 18,
    color: "#999",
  },
  modalBody: {
    paddingBottom: 16,
  },
  modalTag: {
    marginBottom: 10,
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 6,
  },
  modalTagText: {
    fontSize: 16,
    color: "#333",
  },
});

export default ModalTags;
