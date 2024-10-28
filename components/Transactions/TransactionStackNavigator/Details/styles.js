import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f7',
        padding: 20,
        // justifyContent: 'center',
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#105D38',
        marginBottom: 30,
        textAlign: 'center',
    },
    detailContainer: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    label: {
        fontSize: 16,
        color: '#777',
        marginBottom: 6,
    },
    value: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    separator: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginVertical: 10,
    },
})