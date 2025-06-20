import React from "react";
import { View, Text } from "react-native";
import { calculatePrice } from "../../utilities/calculatePrice";
import { styles } from "./checkOut.styles";

const CheckOut = ({ items, children }) => {
  const { fees, total } = calculatePrice(items);

  return (
    <View style={styles.checkoutContainer}>
      <View style={styles.checkoutBox}>
        <View style={styles.checkoutLine}>
          <Text style={styles.checkoutText}>Fees 1%</Text>
          <Text style={styles.checkoutText}>$ {fees}</Text>
        </View>

        <View style={[styles.checkoutLine]}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalText}>$ {total}</Text>
        </View>

        {children && <View>{children}</View>}
      </View>
    </View>
  );
};

export default CheckOut;