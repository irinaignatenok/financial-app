import { NavigationContainer } from "@react-navigation/native";
import TransactionList from "./TransactionList/TransactionList";
import { View, Text } from 'react-native';
import { CreateNativeStackNavigation, createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './Details/Details';

const Stack = createNativeStackNavigator()
export default function TransactionsStackNavigator({ navigation, route, transactions }) {
    return (
        // <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                headerTitleAlign: 'center'
            }}
        >
            <Stack.Screen
                name="TransactionList"
                options={{ title: 'Transactions' }}
            >
                {(props) => (
                    <TransactionList
                        {...props}
                        transactions={transactions}
                    />
                )}
            </Stack.Screen>
            <Stack.Screen
                name="Details"
                component={Details}
                options={{ title: 'Details', headerBackTitle: 'Back' }}

            />
        </Stack.Navigator>
        // </NavigationContainer>


    );
}
