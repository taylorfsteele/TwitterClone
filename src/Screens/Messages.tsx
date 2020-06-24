import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { MaterialBottomTabNavigationProp } from "@react-navigation/material-bottom-tabs";
import { Headline, Caption, useTheme, Button } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../Components/Header";

const Stack = createStackNavigator();
export const Messages = () => {
	const { colors } = useTheme();
	return (
		<ScrollView
			style={{ backgroundColor: colors.background }}
			contentContainerStyle={[styles.scrollViewContent]}
		>
			<Headline style={styles.centerText}>Slide into your DMs here</Headline>
			<Caption style={styles.centerText}>
				Here's a great place to reach out to random people to share your likes, follows, or
				retweets. In my experience, people usually are nice if you're nice.
			</Caption>
			<Button
				onPress={() => {}}
				style={styles.button}
				mode="contained"
				labelStyle={{ color: "white" }}
			>
				Write a message
			</Button>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scrollViewContent: {
		flex: 1,
		paddingHorizontal: 30,
		justifyContent: "center",
		alignItems: "center",
	},
	centerText: {
		textAlign: "center",
	},
	button: {
		marginTop: 20,
	},
});
