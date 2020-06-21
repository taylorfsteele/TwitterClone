import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/Routes";

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: "rgb(29,161,242)",
		iconColor: "rgba(0, 0, 0, 0.54)",
		contentColor: "rgba(0, 0, 0, 0.8)",
		imageBorderColor: "rgba(0, 0, 0, 0.15)",
	},
};

export default function App() {
	return (
		<PaperProvider theme={theme}>
			<NavigationContainer>
				<Routes />
			</NavigationContainer>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
