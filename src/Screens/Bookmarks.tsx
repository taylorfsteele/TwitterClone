import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface BookmarksProps {}

const Bookmarks: React.FC<BookmarksProps> = ({}) => {
	return (
		<View style={styles.container}>
			<Text>Bookmarks</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default Bookmarks;
