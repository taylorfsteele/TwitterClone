import React from "react";
import { StyleSheet, View } from "react-native";
import { Surface, Text, Avatar, useTheme } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
	id: number;
	type: NotificationTypes;
	name: string;
	content: string;
	people: Array<{
		name: string;
		image: string;
	}>;
};

const Notifications = {
	twitter: "",
	retweet: "",
	like: "",
	follow: "",
};
type NotificationTypes = keyof typeof Notifications;

export const NotificationTweet = (props: Props) => {
	const { colors } = useTheme();

	const iconRender = (type: NotificationTypes) => {
		switch (type) {
			case "twitter":
				return <MaterialCommunityIcons name="twitter" size={30} color={colors.primary} />;
			case "retweet":
				return <MaterialCommunityIcons name="twitter-retweet" size={30} color="#17BF63" />;
			case "like":
				return <MaterialCommunityIcons name="heart" size={30} color="red" />;
			case "follow":
				return <MaterialCommunityIcons name="account" size={30} color={colors.primary} />;
			default:
				return <MaterialCommunityIcons name="star-four-points" size={30} color="#8d38e8" />;
		}
	};

	return (
		<Surface style={styles.container}>
			<View style={styles.leftColumn}>{iconRender(props.type)}</View>
			<View style={styles.rightColumn}>
				<View style={styles.topRow}>
					{props.people.map(({ name, image }) => (
						<Avatar.Image
							style={{ marginRight: 10 }}
							key={name}
							source={{ uri: image }}
							size={40}
						/>
					))}
				</View>
				<Text style={{ marginBottom: 10 }}>
					{props.people.map(({ name }) => name).join(" and ")} likes {props.name} tweet.
				</Text>
				<Text style={{ color: colors.contentColor }}>{props.content}</Text>
			</View>
		</Surface>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingTop: 15,
		paddingRight: 15,
		paddingBottom: 15,
		backgroundColor: "rgba(0,0,0,0)",
	},
	leftColumn: {
		width: 100,
		marginRight: 10,
		alignItems: "flex-end",
	},
	rightColumn: {
		flex: 1,
	},
	topRow: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
});
