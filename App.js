
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import TransactionsStackNavigator from './components/Transactions/TransactionStackNavigator/TransactionsStackNavigator'
import Summary from './components/Summary/Summary.js';
import { useState, useEffect } from 'react';



const Tab = createBottomTabNavigator()

export default function App() {

  const [transactions, setTransactions] = useState([])


  useEffect(() => {
    const transactions = [
      { id: '1', name: 'Groceries', amount: 50, date: '2024-10-01' },
      { id: '2', name: 'Electricity Bill', amount: 100, date: '2024-10-05' },
      // Add more transactions as needed
    ]
    setTransactions(transactions)
  }, [])


  return (

    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Transactions'
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#4CD080',
          tabBarInactiveTintColor: '#105D38',
          tabBarStyle: {
            backgroundColor: '#fff',
            height: 70,
            paddingBottom: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            // elevation: 5,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Transactions') {
              iconName = focused ? 'money' : 'money';
            } else {
              iconName = focused ? 'file' : 'file-text';
            }
            return <FontAwesome name={iconName} size={size} color={color} />;
          }
        })}
      >
        <Tab.Screen
          name="Transactions" >
          {(props) => (
            <TransactionsStackNavigator
              {...props}
              transactions={transactions} />
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Total">
          {(props) => (
            <Summary
              {...props}
              transactions={transactions} />
          )}
        </Tab.Screen>


      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
