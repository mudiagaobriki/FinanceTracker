import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from "react-native";
import BalanceCard from "../components/BalanceCard";
import TransactionItem from "../components/TransactionItem";

const dummyData = [
    {
        key: 1,
        name: "Fish",
        amount: 45.31,
        date: new Date(),
        type: "income",
    },
    {
        key: 2,
        name: "Meat",
        amount: 23.94,
        date: new Date(),
        type: "expenses",
    },
    {
        key: 3,
        name: "Bike",
        amount: 1053.23,
        date: new Date(),
        type: "income",
    },
    {
        key: 4,
        name: "Bread",
        amount: 10.00,
        date: new Date(),
        type: "expenses",
    },
    {
        key: 5,
        name: "Goat Meat",
        amount: 52.11,
        date: new Date(),
        type: "income",
    }
]

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <BalanceCard balance={"84,345"} income={"234,023"} expenditure={"34,902"} />
            <View style={styles.headingsView}>
                <Text style={styles.transactionsText}>Transactions</Text>
                <Text style={styles.seeAllText}>See All</Text>
            </View>
            {
                dummyData.map((item, index) => {
                    return <TransactionItem key={item?.key} name={item?.name}
                        date={new Date(item?.date).toDateString()}
                        time={new Date(item?.date).toTimeString()}
                        amount={item?.amount}
                        type={item?.type}/>
                })
            }
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
        paddingTop: 30,
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
