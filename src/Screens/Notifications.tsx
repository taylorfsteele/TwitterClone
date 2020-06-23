import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useTheme } from "react-native-paper";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AllNotifications from "./AllNotifications";
import Mentions from "./Mentions";

const Tab = createMaterialTopTabNavigator();

const Notifications = () => {
	return (
		<Tab.Navigator screenOptions={{}}>
			<Tab.Screen name="AllNotifications" component={AllNotifications} />
			<Tab.Screen name="Mentions" component={Mentions} />
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({});

export default Notifications;
