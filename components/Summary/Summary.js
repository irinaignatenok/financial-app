import { View, Text } from 'react-native';

export default function Summary({ transactions }) {
    const totalExpenses = transactions.reduce((acc, curr) => acc + curr.amount, 0);
    return (
        <View>
            <Text>
                Total Expenses: ${totalExpenses}
            </Text>
            <Text>Hello</Text>
        </View>
    );
}