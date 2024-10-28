import { View, Text } from 'react-native';
import styles from './styles';

export default function Details({ route }) {

    const { transaction } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Transaction Details</Text>
            <View style={styles.detailContainer}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.value}>{transaction.name}</Text>
                <View style={styles.separator} />
                <Text style={styles.label}>Amount:</Text>
                <Text style={styles.value}>${transaction.amount}</Text>
                <View style={styles.separator} />
                <Text style={styles.label}>Date:</Text>
                <Text style={styles.value}>{transaction.date}</Text>
            </View>
        </View>
    );
}
