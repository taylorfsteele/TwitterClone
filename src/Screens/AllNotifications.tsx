import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { useTheme } from "react-native-paper";
import { NotificationTweet } from "../Components/NotificationTweet";
import { mockNotificationTweets } from "../mockData";

type NotificationTweetProps = React.ComponentProps<typeof NotificationTweet>;

export const AllNotifications = ({}) => {
	const { colors } = useTheme();

	return (
		<FlatList
			data={mockNotificationTweets}
			renderItem={({ item }: { item: NotificationTweetProps }) => <NotificationTweet {...item} />}
			keyExtractor={(item: NotificationTweetProps) => item.id.toString()}
			contentContainerStyle={{ backgroundColor: colors.background }}
			ItemSeparatorComponent={() => (
				<View style={{ height: StyleSheet.hairlineWidth, backgroundColor: "lightgrey" }} />
			)}
		/>
	);
};
