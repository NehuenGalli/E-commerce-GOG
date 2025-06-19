import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import emptyCart from '../../assets/images/emptyCart.png';
import { styles } from './emptyCart.style';

const EmptyCart = () => {
     const router = useRouter();
    
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Image
                    source={emptyCart}
                    style={styles.emptyCartImage}
                    resizeMode="contain"
                />
                <Text style={styles.emptyCartText}>
                    Start by adding a game!
                </Text>
                <TouchableOpacity 
                    style={styles.emptyCartBtn}
                    onPress={() => router.replace("/home")}
                >
                    <Text style={styles.btnText}>Add games</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default EmptyCart;