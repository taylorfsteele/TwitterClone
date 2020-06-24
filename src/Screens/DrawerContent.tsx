import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import {
	DrawerContentComponentProps,
	DrawerContentScrollView,
	DrawerItem,
} from "@react-navigation/drawer";
import {
	Avatar,
	Caption,
	Drawer,
	Paragraph,
	Switch,
	Text,
	Title,
	TouchableRipple,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PreferencesContext } from "../Context/preferencesContext";

//Gotta figure out how to pass param list as props
const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
	const { theme, toggleTheme } = useContext(PreferencesContext);

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
							// @see https://github.com/react-navigation/react-navigation/issues/6790
							navigation.dispatch(DrawerActions.closeDrawer());
							navigation.navigate("Profile");
						}}
					/>
					<DrawerItem
						icon={({ color, size }) => (
							<MaterialCommunityIcons name="tune" color={color} size={size} />
						)}
						label="Preferences"
						onPress={() => {
							navigation.dispatch(DrawerActions.closeDrawer());
							navigation.navigate("Preferences");
						}}
					/>
					<DrawerItem
						icon={({ color, size }) => (
							<MaterialCommunityIcons name="bookmark-outline" color={color} size={size} />
						)}
						label="Bookmarks"
						onPress={() => {
							navigation.dispatch(DrawerActions.closeDrawer());
							navigation.navigate("Bookmarks");
						}}
					/>
				</Drawer.Section>
				<Drawer.Section title="Preferences">
					<TouchableRipple onPress={toggleTheme}>
						<View style={styles.preference}>
							<Text>Dark Theme</Text>
							<View pointerEvents="none">
								<Switch value={theme === "dark"} />
							</View>
						</View>
					</TouchableRipple>
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
	preference: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 12,
		paddingHorizontal: 16,
	},
});

export default DrawerContent;
