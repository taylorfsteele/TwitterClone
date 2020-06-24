import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import {
	DrawerParamList,
	MainTabsParamList,
	RootStackParamList,
	FeedStackParamList,
} from "./types";
import Bookmarks from "./Screens/Bookmarks";
import { Details } from "./Screens/Details";
import DrawerContent from "./Screens/DrawerContent";
import MainFeed from "./Screens/MainFeed";
import Preferences from "./Screens/Preferences";
import Profile from "./Screens/Profile";
import Header from "./Components/Header";
import { Notifications } from "./Screens/Notifications";
import { Messages } from "./Screens/Messages";
import { useTheme, Portal, FAB } from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";

const FeedStack = createStackNavigator<FeedStackParamList>();
const FeedNavigator = () => {
	return (
		<FeedStack.Navigator
			initialRouteName="TabNavigator"
			headerMode="screen"
			screenOptions={{
				cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
				header: (props) => <Header {...props} />,
			}}
		>
			<FeedStack.Screen
				name="TabNavigator"
				component={TabNavigator}
				options={({ route }) => {
					const routeName = route.state ? route.state.routes[route.state.index].name : "MainFeed";
					return { headerTitle: routeName };
				}}
			/>
			<FeedStack.Screen name="Details" component={Details} options={{ headerTitle: "Tweet" }} />
		</FeedStack.Navigator>
	);
};

const Tab = createMaterialBottomTabNavigator<MainTabsParamList>();
const TabNavigator = ({ route }) => {
	const { colors } = useTheme();
	const isFocused = useIsFocused();
	const routeName = route.state ? route.state.routes[route.state.index].name : "MainFeed";

	let icon = "feather";

	switch (routeName) {
		case "Messages":
			icon = "email-plus-outline";
			break;
		default:
			icon = "feather";
			break;
	}

	return (
		<>
			<Tab.Navigator
				initialRouteName="MainFeed"
				sceneAnimationEnabled={false}
				shifting={true}
				activeColor={colors.primary}
				barStyle={{ backgroundColor: colors.surface }}
			>
				<Tab.Screen
					name="MainFeed"
					component={MainFeed}
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
			<Portal>
				<FAB
					visible={isFocused}
					icon={icon}
					style={{ position: "absolute", bottom: 100, right: 16, backgroundColor: colors.primary }}
					color="white"
				/>
			</Portal>
		</>
	);
};

const Drawer = createDrawerNavigator<DrawerParamList>();
const DrawerNavigator = () => {
	return (
		<Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
			<Drawer.Screen name="FeedNavigator" component={FeedNavigator} />
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
