import React, { useState, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
	Provider as PaperProvider,
	DefaultTheme,
	DarkTheme as ReactNativePaperDarkTheme,
} from "react-native-paper";
import {
	NavigationContainer,
	DarkTheme as ReactNavigationDarkTheme,
	DefaultTheme as ReactNavigationDefaultTheme,
} from "@react-navigation/native";
import Routes from "./src/Routes";
import { PreferencesContext } from "./src/Context/preferencesContext";

const LightTheme = {
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

const DarkTheme = {
	...ReactNativePaperDarkTheme,
	...ReactNavigationDarkTheme,
	colors: {
		...ReactNativePaperDarkTheme.colors,
		...ReactNavigationDarkTheme.colors,
		iconColor: "rgba(255, 255, 255, 0.54)",
		contentColor: "rgba(255, 255, 255, 0.8)",
		imageBorderColor: "rgba(255, 255, 255, 0.15)",
	},
};

export default function App() {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	function toggleTheme() {
		setTheme((theme) => (theme === "light" ? "dark" : "light"));
	}

	const preferences = useMemo(() => ({ toggleTheme, theme }), [theme]);

	return (
		<PreferencesContext.Provider value={preferences}>
			<PaperProvider theme={theme === "light" ? { ...LightTheme } : { ...DarkTheme }}>
				<NavigationContainer
					theme={theme === "light" ? ReactNavigationDefaultTheme : { ...DarkTheme }}
				>
					<Routes />
				</NavigationContainer>
			</PaperProvider>
		</PreferencesContext.Provider>
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
