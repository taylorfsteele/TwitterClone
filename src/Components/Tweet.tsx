import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import {
	Surface,
	Title,
	Caption,
	Text,
	Avatar,
	TouchableRipple,
	useTheme,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
	id: number;
	name: string;
	handle: string;
	date: string;
	content: string;
	image: string;
	avatar: string;
	comments: number;
	retweets: number;
	hearts: number;
	onPress: (id: number) => void;
};

export const Tweet = (props: Props) => {
	const { colors } = useTheme();
	console.log(colors);

	return (
		<TouchableRipple onPress={() => props.onPress(props.id)}>
			<Surface style={styles.container}>
				<View style={styles.leftColumn}>
					<Avatar.Image source={{ uri: props.avatar }} />
				</View>
				<View style={styles.rightColumn}>
					<View style={styles.topRow}>
						<Title>{props.name}</Title>
						<Caption style={styles.handle}>{props.handle}</Caption>
						<Caption style={[styles.handle, styles.dot]}>{"\u2B24"}</Caption>
						<Caption>{props.date}</Caption>
					</View>
					<Text style={{ color: colors.contentColor }}>{props.content}</Text>
					<Image
						source={{ uri: props.image }}
						style={[styles.image, { borderColor: colors.imageBorderColor }]}
					/>
					<View style={styles.bottomRow}>
						<TouchableOpacity onPress={() => {}} hitSlop={{ top: 10, bottom: 10 }}>
							<View style={styles.iconContainer}>
								<MaterialCommunityIcons name="comment-outline" size={12} color={colors.iconColor} />
								<Caption style={styles.iconDescription}>{props.comments}</Caption>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => {}} hitSlop={{ top: 10, bottom: 10 }}>
							<View style={styles.iconContainer}>
								<MaterialCommunityIcons name="share-outline" size={14} color={colors.iconColor} />
								<Caption style={styles.iconDescription}>{props.retweets}</Caption>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => {}} hitSlop={{ top: 10, bottom: 10 }}>
							<View style={styles.iconContainer}>
								<MaterialCommunityIcons name="heart-outline" size={12} color={colors.iconColor} />
								<Caption style={styles.iconDescription}>{props.hearts}</Caption>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</Surface>
		</TouchableRipple>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingTop: 15,
		paddingRight: 15,
	},
	leftColumn: {
		width: 100,
		alignItems: "center",
	},
	rightColumn: {
		flex: 1,
	},
	topRow: {
		flexDirection: "row",
		alignItems: "baseline",
	},
	bottomRow: {
		paddingVertical: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	handle: {
		marginRight: 3,
	},
	dot: {
		fontSize: 3,
	},
	image: {
		borderWidth: StyleSheet.hairlineWidth,
		marginTop: 10,
		borderRadius: 20,
		width: "100%",
		height: 150,
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
