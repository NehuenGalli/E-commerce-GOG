import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    contentContainer: {
        alignItems: 'center',
        width: '100%',
        maxWidth: 400,
    },
    emptyCartImage: {
        width: 200,
        height: 200,
    },
    emptyCartText: {
        fontSize: 30,
        marginBottom: 24,
        textAlign: 'center',
        color: '#333',
        fontWeight: '500',    
    },
    emptyCartBtn: {
        backgroundColor: '#7be15c',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 32,
        width: '100%',
        maxWidth: 200,
    },
    btnText: {
        color: '#1e1e1e',
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 20,
    },
});
