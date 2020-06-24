export type RootStackParamList = {
	DrawerNavigator: undefined;
	Profile: undefined;
	Preferences: undefined;
	Bookmarks: undefined;
};

export type DrawerParamList = {
	FeedNavigator: undefined;
};

export type MainTabsParamList = {
	MainFeed: undefined;
	Notifications: undefined;
	Messages: undefined;
};

export type FeedStackParamList = {
	TabNavigator: undefined;
	Details: {
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
	};
};
