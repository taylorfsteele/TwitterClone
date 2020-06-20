import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Profile from "./Screens/Profile";
import Preferences from "./Screens/Preferences";
import Bookmarks from "./Screens/Bookmarks";
import Feed from "./Screens/Feed";
import { DrawerContent } from "./Screens/DrawerContent";
import { RootStackParamList, MainTabsParamList, DrawerParamList } from "./ParamLists";

const Tab = createMaterialBottomTabNavigator<MainTabsParamList>();
const TabNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Feed" component={Feed} />
		</Tab.Navigator>
	);
};

const Drawer = createDrawerNavigator<DrawerParamList>();
const DrawerNavigator = () => {
	return (
		<Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
			<Drawer.Screen name="TabNavigator" component={TabNavigator} />
		</Drawer.Navigator>
	);
};

const RootStack = createStackNavigator<RootStackParamList>();
const Routes = () => {
	return (
		<RootStack.Navigator
			initialRouteName="DrawerNavigator"
			screenOptions={{
				cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
			}}
		>
			<RootStack.Screen
				name="DrawerNavigator"
				component={DrawerNavigator}
				options={{ headerShown: false }}
			/>
			<RootStack.Screen name="Profile" component={Profile} />
			<RootStack.Screen name="Preferences" component={Preferences} />
			<RootStack.Screen name="Bookmarks" component={Bookmarks} />
		</RootStack.Navigator>
	);
};

export default Routes;
