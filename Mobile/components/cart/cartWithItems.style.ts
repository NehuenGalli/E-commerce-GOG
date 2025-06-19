import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        padding: 16,
    },
    productsTitle: {
        fontSize: 26,
        fontWeight: 400,
        marginBottom: 16,
        color: 'white',
    },
    line: {
        height: 1,
        backgroundColor: 'white',
        width: '100%',
        marginBottom: 16
    },
    itemsContainer: {
        marginBottom: 20,
        backgroundColor: '#7f7f7f',
        borderRadius: 8,
        padding: 16,
    },
    cartItem: {
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 16,
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    },
    cartItemImage: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        marginBottom: 8,
    },
    cartItemDetails: {
        flex: 1,
        marginLeft: 12,
        marginBottom: 6,
    },
    cartItemName: {
        fontSize: 28,
        color: 'black',
        fontWeight: '500',
        alignSelf: 'flex-start',
    },
    cartItemActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    cartPrice: {
        fontSize: 18,
        color: '#a03bb7',
        fontWeight: '700',
    },
    removeItemBtn: {
        padding: 8,
        marginRight: 8,
    },
    checkoutContainer: {
        backgroundColor: '#7f7f7f',
        borderRadius: 8,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    buyButton: {
        backgroundColor: '#7be15c',
        borderRadius: 4,
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignItems: 'center',
        marginTop: 16,
    },
    buyButtonText: {
        color: '#1e1e1e',
        fontWeight: '700',
        fontSize: 16,
    },
});