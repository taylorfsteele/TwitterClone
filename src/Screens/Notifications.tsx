import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useTheme } from "react-native-paper";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { AllNotifications } from "./AllNotifications";
import Mentions from "./Mentions";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../Components/Header";
import MainFeed from "./MainFeed";

const Tab = createMaterialTopTabNavigator();
export const Notifications = () => {
	const { colors } = useTheme();
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: colors.primary,
				inactiveTintColor: colors.contentColor,
				indicatorStyle: { backgroundColor: colors.primary },
			}}
		>
			<Tab.Screen options={{ title: "All" }} name="AllNotifications" component={AllNotifications} />
			<Tab.Screen name="Mentions" component={MainFeed} />
		</Tab.Navigator>
	);
};
