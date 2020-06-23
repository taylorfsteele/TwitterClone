import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useTheme } from "react-native-paper";

import { Tweet } from "../Components/Tweet";
import { mockTweets } from "../mockData";
import { FeedStackParamList } from "../types";
import { Item } from "react-native-paper/lib/typescript/src/components/List/List";

type TweetProps = React.ComponentProps<typeof Tweet>;

type FeedProps = {
	navigation: StackNavigationProp<FeedStackParamList>;
};

const MainFeed = (props) => {
	const theme = useTheme();
	const data = mockTweets.map((singleTweet) => ({
		...singleTweet,
		onPress: () =>
			props.navigation &&
			props.navigation.push("Details", {
				...singleTweet,
			}),
	}));

	return (
		<FlatList
			data={data}
			renderItem={({ item }) => <Tweet {...item} />}
			keyExtractor={(item) => item.id.toString()}
			contentContainerStyle={{ backgroundColor: theme.colors.background }}
			ItemSeparatorComponent={() => (
				<View
					style={{
						height: StyleSheet.hairlineWidth,
						backgroundColor: "lightgrey",
					}}
				/>
			)}
		/>
	);
};

const styles = StyleSheet.create({});

export default MainFeed;
