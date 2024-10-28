import { View, Text } from 'react-native';
import styles from './styles'

export default function Summary({ transactions }) {
    const totalExpenses = transactions.reduce((acc, curr) => acc + curr.amount, 0);
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.header}>Total Expenses</Text>
                <Text style={styles.amount}>${totalExpenses.toFixed(2)}</Text>
            </View>
            <View style={styles.tip}>
                <Text style={styles.tipText}>Tracking your expenses is key to financial success!</Text>
            </View>
        </View>
    );
}