import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Surface, Title, Caption, Avatar, Subheading, useTheme } from "react-native-paper";
import { FeedStackParamList } from "../types";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type DetailedTweetRouteProp = RouteProp<FeedStackParamList, "Details">;
type DetailedTweetNavigationProp = StackNavigationProp<FeedStackParamList, "Details">;

type Props = {
	route: DetailedTweetRouteProp;
	navigation: DetailedTweetNavigationProp;
};

export const DetailedTweet = (props: Props) => {
	const { params } = props.route;
	const { colors } = useTheme();
	return (
		<Surface style={styles.container}>
			<View style={styles.topRow}>
				<Avatar.Image style={styles.avatar} source={{ uri: params.avatar }} size={60} />
				<View>
					<Title>{params.name}</Title>
					<Caption style={styles.handle}>{params.handle}</Caption>
				</View>
			</View>
			<Subheading style={[styles.content, { color: colors.contentColor }]}>
				{params.content}
			</Subheading>
			{params.image ? (
				<Image
					source={{ uri: params.image }}
					style={[styles.image, { borderColor: colors.borderColor }]}
				/>
			) : null}
			<View
				style={{
					marginTop: 10,
					height: StyleSheet.hairlineWidth,
					backgroundColor: "lightgrey",
				}}
			/>
			<View style={styles.bottomRow}>
				<TouchableOpacity onPress={() => {}} hitSlop={{ top: 10, bottom: 10 }}>
					<View style={styles.iconContainer}>
						<MaterialCommunityIcons name="comment-outline" size={12} color={colors.iconColor} />
						<Caption style={styles.iconDescription}>{params.comments}</Caption>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {}} hitSlop={{ top: 10, bottom: 10 }}>
					<View style={styles.iconContainer}>
						<MaterialCommunityIcons name="share-outline" size={14} color={colors.iconColor} />
						<Caption style={styles.iconDescription}>{params.retweets}</Caption>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {}} hitSlop={{ top: 10, bottom: 10 }}>
					<View style={styles.iconContainer}>
						<MaterialCommunityIcons name="heart-outline" size={12} color={colors.iconColor} />
						<Caption style={styles.iconDescription}>{params.hearts}</Caption>
					</View>
				</TouchableOpacity>
			</View>
			<View
				style={{
					height: StyleSheet.hairlineWidth,
					backgroundColor: "lightgrey",
				}}
			/>
		</Surface>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	topRow: {
		flexDirection: "row",
		alignItems: "center",
	},
	bottomRow: {
		paddingVertical: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	avatar: {
		marginRight: 20,
	},
	handle: {
		marginRight: 3,
		lineHeight: 12,
	},
	content: {
		marginTop: 25,
		fontSize: 20,
		lineHeight: 30,
	},
	image: {
		borderWidth: StyleSheet.hairlineWidth,
		marginTop: 25,
		borderRadius: 20,
		width: "100%",
		height: 280,
	},
	iconContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	iconDescription: {
		marginLeft: 2,
		lineHeight: 12,
	},
});
