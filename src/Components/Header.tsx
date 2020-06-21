import React from "react";
import { StackHeaderProps } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native";
import { Appbar, Avatar, useTheme } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header: React.FC<StackHeaderProps> = ({ scene, previous, navigation }) => {
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
				<Appbar.BackAction onPress={() => navigation.pop()} />
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
			<Appbar.Content
				style={{ alignItems: "center" }}
				title={
					title === "FeedList" ? (
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
			/>

			<Appbar.Action icon={require("../../assets/githubLight.png")} size={30} onPress={() => {}} />
		</Appbar.Header>
	);
};

export default Header;
