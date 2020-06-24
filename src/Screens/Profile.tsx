import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = ({}) => {
	return (
		<View style={styles.container}>
			<Text>Profile</Text>
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

export default Profile;
