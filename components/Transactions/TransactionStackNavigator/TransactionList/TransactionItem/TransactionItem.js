import { View, Text } from 'react-native';

export default function TransactionItem({ transaction }) {
    return (
        <View>
            <Text>{transaction.name}</Text>
            <Text>${transaction.amount}</Text>
            <Text>{transaction.date}</Text>
        </View>
    );
}
