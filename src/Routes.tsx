import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { DrawerParamList, MainTabsParamList, RootStackParamList } from "./ParamLists";
import Bookmarks from "./Screens/Bookmarks";
import Details from "./Screens/Details";
import DrawerContent from "./Screens/DrawerContent";
import FeedList from "./Screens/FeedList";
import Preferences from "./Screens/Preferences";
import Profile from "./Screens/Profile";
import Header from "./Components/Header";

const FeedStack = createStackNavigator();
const FeedNavigator = () => {
	return (
		<FeedStack.Navigator
			initialRouteName="FeedList"
			headerMode="screen"
			screenOptions={{
				header: ({ scene, previous, navigation }) => (
					<Header scene={scene} previous={previous} navigation={navigation} />
				),
			}}
		>
			<FeedStack.Screen name="FeedList" component={FeedList} />
			<FeedStack.Screen name="Details" component={Details} />
		</FeedStack.Navigator>
	);
};

const Tab = createMaterialBottomTabNavigator<MainTabsParamList>();
const TabNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="FeedNavigator" component={FeedNavigator} />
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
