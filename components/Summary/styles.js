import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f7',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 30,
        width: '90%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    amount: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#4CD080',
    },
    tip: {
        marginTop: 20,
        backgroundColor: '#E8F6EF',
        borderRadius: 10,
        padding: 15,
        width: '90%',
        alignItems: 'center',
    },
    tipText: {
        fontSize: 16,
        color: '#105D38',
        textAlign: 'center',
    },
})