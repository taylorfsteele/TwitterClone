import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface PreferencesProps {}

const Preferences: React.FC<PreferencesProps> = ({}) => {
	return (
		<View style={styles.container}>
			<Text>Preferences</Text>
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

export default Preferences;
