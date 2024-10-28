import { View, Text } from 'react-native';
import styles from './styles';

export default function TransactionItem({ transaction }) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{transaction.name}</Text>
            <Text style={styles.amount}>${transaction.amount}</Text>
            <Text style={styles.date}>{transaction.date}</Text>
        </View>
    );
}
