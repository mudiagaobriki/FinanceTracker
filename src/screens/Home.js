import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from "react-native";
import BalanceCard from "../components/BalanceCard";
import TransactionItem from "../components/TransactionItem";
import { DateTime } from "luxon";
import {openDatabase} from "../helperFunctions/SqliteFunctions";
import {useDispatch} from "react-redux";
import {
    setUserBalance,
    setUserTotalExpenses,
    setUserTotalIncome,
    setUserTransactions
} from "../redux/features/finances/financesSlice"
import {useIsFocused} from "@react-navigation/native";


const Home = () => {
    const db = openDatabase();
    const dispatch  = useDispatch();
    const focused = useIsFocused();

    const [totalExpenses, setTotalExpenses] = useState(0)
    const [totalIncome, setTotalIncome] = useState(0)
    const [balance, setBalance] = useState(0)
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                "select * from items;",[], (_, { rows }) =>{
                    setTransactions(rows?._array)
                    dispatch(setUserTransactions(rows?._array))
                }
            );
            tx.executeSql(
                "select sum(value) as sum from items;",[], (_, { rows }) =>{
                    setBalance(rows?._array[0]?.sum)
                    dispatch(setUserBalance(rows?._array[0]?.sum))
                }
            );
            tx.executeSql(
                "select sum(value) as sum from items where type = 'income';",[], (_, { rows }) =>{
                    setTotalIncome(rows?._array[0]?.sum)
                    dispatch(setUserTotalIncome(rows?._array[0]?.sum))
                }
            );
            tx.executeSql(
                "select sum(value) as sum from items where type = 'expenses';",[], (_, { rows }) =>{
                    setTotalExpenses(rows?._array[0]?.sum)
                    dispatch(setUserTotalExpenses(rows?._array[0]?.sum))
                }
            );
        });
    }, [focused]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{width: "100%"}} showsVerticalScrollIndicator={false} >
                <BalanceCard balance={balance} income={totalIncome} expenditure={totalExpenses} />
                <View style={styles.headingsView}>
                    <Text style={styles.transactionsText}>Transactions</Text>
                    <Text style={styles.seeAllText}>See All</Text>
                </View>
                {
                    transactions.map((item, index) => {
                        return <TransactionItem key={item?.id} name={item?.name}
                                                date={DateTime.fromJSDate(new Date(item?.transactionDate)).toLocaleString(DateTime.DATE_FULL)}
                                                time={DateTime.fromJSDate(new Date(item?.transactionDate)).toLocaleString(DateTime.TIME_WITH_SHORT_OFFSET)}
                                                amount={item?.value}
                                                type={item?.type}/>
                    })
                }
            </ScrollView>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    headingsView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 15,
    },
    transactionsText: {
        fontSize: 16,
    },
    seeAllText: {
        fontSize: 12,
    }
});

export default Home;
