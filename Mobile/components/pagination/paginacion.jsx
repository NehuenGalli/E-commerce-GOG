import { View, Text, Pressable } from "react-native";
import { styles } from "./paginacion.styles";
import { Ionicons } from "@expo/vector-icons";

const Paginacion = ({ totalPages, currentPage, onPageChange }) => {
  const firstPage = () => onPageChange(1);
  const previousPage = () => onPageChange(Math.max(currentPage - 1, 1));
  const nextPage = () => onPageChange(Math.min(currentPage + 1, totalPages));
  const lastPage = () => onPageChange(totalPages);

  return (
    <View style={styles.container}>
      <Pressable onPress={firstPage} disabled={currentPage === 1}>
        <View style={styles.doubleBack.container}>
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color={currentPage === 1 ? "#ccc" : "#000"}
            style={styles.doubleBack.iconFirst}
          />
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color={currentPage === 1 ? "#ccc" : "#000"}
          />
        </View>
      </Pressable>

      <Pressable onPress={previousPage} disabled={currentPage === 1}>
        <Ionicons
          name="chevron-back-outline"
          size={24}
          color={currentPage === 1 ? "#ccc" : "#000"}
        />
      </Pressable>

      <Text style={styles.pageText}>
        {currentPage} de {totalPages}
      </Text>

      <Pressable onPress={nextPage} disabled={currentPage === totalPages}>
        <Ionicons
          name="chevron-forward-outline"
          size={24}
          color={currentPage === totalPages ? "#ccc" : "#000"}
        />
      </Pressable>

      <Pressable onPress={lastPage} disabled={currentPage === totalPages}>
        <View style={styles.doubleForward.container}>
          <Ionicons
            name="chevron-forward-outline"
            size={24}
            color={currentPage === totalPages ? "#ccc" : "#000"}
          />
          <Ionicons
            name="chevron-forward-outline"
            size={24}
            color={currentPage === totalPages ? "#ccc" : "#000"}
            style={styles.doubleForward.iconSecond}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default Paginacion;
