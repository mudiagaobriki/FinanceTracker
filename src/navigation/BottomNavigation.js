import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home";
import NewTransaction from "../screens/NewTransaction";
import NavigationNames from "./NavigationNames";
import Reports from "../screens/Reports";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={NavigationNames.Home}>
                <Tab.Screen name={NavigationNames.Home} component={Home} />
                <Tab.Screen name={NavigationNames.NewTransaction} component={NewTransaction} />
                <Tab.Screen name={NavigationNames.Reports} component={Home} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
