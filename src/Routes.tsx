import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { DrawerParamList, MainTabsParamList, RootStackParamList } from "./types";
import Bookmarks from "./Screens/Bookmarks";
import Details from "./Screens/Details";
import DrawerContent from "./Screens/DrawerContent";
import MainFeed from "./Screens/MainFeed";
import Preferences from "./Screens/Preferences";
import Profile from "./Screens/Profile";
import Header from "./Components/Header";
import Notifications from "./Screens/Notifications";
import Messages from "./Screens/Messages";
import { useTheme } from "react-native-paper";

const FeedStack = createStackNavigator();
const FeedNavigator = () => {
	return (
		<FeedStack.Navigator
			initialRouteName="MainFeed"
			headerMode="screen"
			screenOptions={{
				header: ({ scene, previous, navigation }) => (
					<Header scene={scene} previous={previous} navigation={navigation} />
				),
			}}
		>
			<FeedStack.Screen name="MainFeed" component={MainFeed} />
			<FeedStack.Screen name="Details" component={Details} />
		</FeedStack.Navigator>
	);
};

const Tab = createMaterialBottomTabNavigator<MainTabsParamList>();
const TabNavigator = () => {
	const { colors } = useTheme();
	return (
		<Tab.Navigator
			initialRouteName="FeedNavigator"
			sceneAnimationEnabled={false}
			shifting={true}
			activeColor={colors.primary}
			barStyle={{ backgroundColor: colors.surface }}
		>
			<Tab.Screen
				name="FeedNavigator"
				component={FeedNavigator}
				options={{
					title: "Feed",
					tabBarIcon: "home-account",
				}}
			/>
			<Tab.Screen
				name="Notifications"
				component={Notifications}
				options={{
					tabBarIcon: "bell-outline",
				}}
			/>
			<Tab.Screen
				name="Messages"
				component={Messages}
				options={{
					tabBarIcon: "message-text-outline",
				}}
			/>
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
