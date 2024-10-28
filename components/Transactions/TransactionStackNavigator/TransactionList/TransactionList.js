import { Pressable, View, FlatList } from 'react-native';
import TransactionItem from './TransactionItem/TransactionItem.js';

export default function TransactionList({ navigation, route, transactions }) {

    const handleTransactionPress = (transaction) => {
        navigation.navigate('Details', { transaction });
    };

    const renderItem = ({ item }) => (
        <Pressable onPress={() => handleTransactionPress(item)}>
            <TransactionItem
                transaction={item}
            />
        </Pressable>
    );

    return (
        <View>
            <FlatList
                data={transactions}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}
