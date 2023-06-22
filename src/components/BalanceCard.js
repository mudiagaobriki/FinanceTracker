import React from 'react';
import {StyleSheet, View, Text} from "react-native";

const BalanceCard = ({balance="0", income="0", expenditure="0"}) => {
    return (
        <View style={styles.card}>
            <View>
                <Text style={styles.labelText}>Total Balance</Text>
                <Text style={styles.balanceText}>${balance}</Text>
            </View>
            <View style={styles.incomeExpensesContainer}>
                <View>
                    <Text style={styles.labelText}>Income</Text>
                    <Text style={styles.incomeExpensesText}>${income}</Text>
                </View>
                <View>
                    <Text style={styles.labelText}>Expenses</Text>
                    <Text style={styles.incomeExpensesText}>${expenditure}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: "100%",
        height: 170,
        backgroundColor: '#8133F8',
        borderRadius: 15,
        padding: 15,
    },
    labelText: {
        color: "#ffffff",
        fontSize: 13,
    },
    balanceText: {
        color: "#ffffff",
        fontSize: 30,
        fontWeight: 700,
    },
    incomeExpensesContainer: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        marginTop: 30,
    },
    incomeExpensesText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: 600,
    }
});

export default BalanceCard;
