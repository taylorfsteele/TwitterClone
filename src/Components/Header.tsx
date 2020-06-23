import React from "react";
import { StackHeaderProps, StackScreenProps } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native";
import { Appbar, Avatar, useTheme } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FeedStackParamList } from "../types";

const Header = ({ scene, previous, navigation }: StackHeaderProps) => {
	const theme = useTheme();
	const { options } = scene.descriptor;
	const title =
		options.headerTitle !== undefined
			? options.headerTitle
			: options.title !== undefined
			? options.title
			: scene.route.name;

	return (
		<Appbar.Header theme={{ colors: { primary: theme.colors.surface } }}>
			{previous ? (
				<Appbar.BackAction color={theme.colors.primary} onPress={() => navigation.pop()} />
			) : (
				<TouchableOpacity
					style={{ marginLeft: 10 }}
					onPress={() => {
						((navigation as any) as DrawerNavigationProp<{}>).openDrawer();
					}}
				>
					<Avatar.Image
						size={40}
						source={{
							uri:
								"https://media-exp1.licdn.com/dms/image/C4E03AQEFupFiF3b2iQ/profile-displayphoto-shrink_200_200/0?e=1597881600&v=beta&t=7AKTAh0dOxX0SyHNeow76qx_YHzBSOt5wvaaytY3UGM",
						}}
					/>
				</TouchableOpacity>
			)}
			{title === "MainFeed" ? (
				<>
					<Appbar.Content
						style={{ alignItems: "center" }}
						title={
							<MaterialCommunityIcons
								color={theme.colors.primary}
								size={40}
								style={{ marginRight: 10 }}
								name="twitter"
							/>
						}
					/>
					<Appbar.Action
						icon={require("../../assets/githubLight.png")}
						size={30}
						color="black"
						onPress={() => {}}
					/>
				</>
			) : (
				<Appbar.Content
					title="Tweet"
					titleStyle={{ fontSize: 18, fontWeight: "bold", color: theme.colors.primary }}
				/>
			)}
		</Appbar.Header>
	);
};

export default Header;

{
	/* <Appbar.Content
				style={{ alignItems: "center" }}
				title={
					title === "MainFeed" ? (
						<MaterialCommunityIcons
							style={{ marginRight: 10 }}
							name="twitter"
							size={40}
							color={theme.colors.primary}
						/>
					) : (
						title
					)
				}
				titleStyle={{
					fontSize: 18,
					fontWeight: "bold",
					color: theme.colors.primary,
				}}
			/> */
}
