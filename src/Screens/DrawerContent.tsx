import React from "react";
import { View, StyleSheet } from "react-native";
import {
	DrawerItem,
	DrawerContentScrollView,
	DrawerNavigationProp,
} from "@react-navigation/drawer";
import {
	useTheme,
	Avatar,
	Title,
	Caption,
	Paragraph,
	Drawer,
	Text,
	TouchableRipple,
	Switch,
} from "react-native-paper";
import { CompositeNavigationProp } from "@react-navigation/native";
import { MaterialBottomTabNavigationProp } from "@react-navigation/material-bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerParamList, RootStackParamList } from "../ParamLists";

type DrawerContentNavigationProp = CompositeNavigationProp<
	MaterialBottomTabNavigationProp<DrawerParamList, "TabNavigator">,
	CompositeNavigationProp<
		DrawerNavigationProp<DrawerParamList>,
		StackNavigationProp<RootStackParamList>
	>
>;

type Props = {
	navigation: DrawerContentNavigationProp;
};

export const DrawerContent = ({ navigation }: Props) => {
	return (
		<DrawerContentScrollView>
			<View style={styles.drawerContent}>
				<View style={styles.userInfoSection}>
					<Avatar.Image
						source={{
							uri:
								"https://media-exp1.licdn.com/dms/image/C4E03AQEFupFiF3b2iQ/profile-displayphoto-shrink_200_200/0?e=1597881600&v=beta&t=7AKTAh0dOxX0SyHNeow76qx_YHzBSOt5wvaaytY3UGM",
						}}
						size={50}
					/>
					<Title style={styles.title}>Taylor Steele</Title>
					<Caption style={styles.caption}>@tsteele</Caption>
					<View style={styles.row}>
						<View style={styles.section}>
							<Paragraph style={[styles.paragraph, styles.caption]}>150</Paragraph>
							<Caption style={styles.caption}>Following</Caption>
						</View>
						<View style={styles.section}>
							<Paragraph style={[styles.paragraph, styles.caption]}>122</Paragraph>
							<Caption style={styles.caption}>Followers</Caption>
						</View>
					</View>
				</View>
				<Drawer.Section style={styles.drawerSection}>
					<DrawerItem
						icon={({ color, size }) => (
							<MaterialCommunityIcons name="account-outline" color={color} size={size} />
						)}
						label="Profile"
						onPress={() => {
							navigation.closeDrawer();
							navigation.navigate("Profile");
						}}
					/>
				</Drawer.Section>
			</View>
		</DrawerContentScrollView>
	);
};

const styles = StyleSheet.create({
	drawerContent: {
		flex: 1,
	},
	drawerSection: {
		marginTop: 15,
	},
	userInfoSection: {
		paddingLeft: 20,
	},
	title: {
		marginTop: 20,
		fontWeight: "bold",
	},
	caption: {
		fontSize: 14,
		lineHeight: 14,
	},
	row: {
		marginTop: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	section: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 15,
	},
	paragraph: {
		fontWeight: "bold",
		marginRight: 3,
	},
});
