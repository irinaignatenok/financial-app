
import TransactionList from "./TransactionList/TransactionList";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './Details/Details';

const Stack = createNativeStackNavigator()
export default function TransactionsStackNavigator({ navigation, route, transactions }) {
    return (

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



    );
}
