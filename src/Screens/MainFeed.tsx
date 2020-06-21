import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Tweet } from "../Components/Tweet";

interface FeedProps {}

const Feed: React.FC<FeedProps> = ({}) => {
	return (
		<View>
			<Tweet />
		</View>
	);
};

const styles = StyleSheet.create({});

export default Feed;
