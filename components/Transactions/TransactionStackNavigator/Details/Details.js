import { View, Text } from 'react-native';

export default function Details({ route }) {
    // Access the transaction data passed through navigation
    const { transaction } = route.params;

    return (
        <View>
            <Text>Transaction Details:</Text>
            <Text>Name: {transaction.name}</Text>
            <Text>Amount: ${transaction.amount}</Text>
            <Text>Date: {transaction.date}</Text>
        </View>
    );
}
