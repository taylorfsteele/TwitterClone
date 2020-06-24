import { Tweet } from "./Components/Tweet";
import { NotificationTweet } from "./Components/NotificationTweet";

type TweetProps = React.ComponentProps<typeof Tweet>;

export const mockTweets: Omit<TweetProps, "onPress">[] = [
	{
		id: 1,
		name: "Evan Bacon 🥓",
		handle: "@Shmadrian",
		date: "10h",
		content: `"Taxi drivers told you what to buy. The shoeshine boy could give you a summary of the day's financial news as he worked with rag and polish." `,
		image:
			"https://imageproxy.themaven.net//https%3A%2F%2Fwww.history.com%2F.image%2FMTcxNjY3MTM5MTM5MjE2NzQ0%2Fstock-market-crash-gettyimages-542350179.jpg",
		avatar:
			"https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-1/p100x100/99274645_1585213041656753_2819858488971231232_n.jpg?_nc_cat=101&_nc_sid=dbb9e7&_nc_ohc=akSMF7UQ3KEAX8bpp9R&_nc_ht=scontent-mia3-1.xx&_nc_tp=6&oh=54b0d07a34c37dde64bc96e9e8f3326d&oe=5F180A6D",
		comments: 12,
		retweets: 36,
		hearts: 175,
	},
	{
		id: 2,
		name: "Gavin 🤖",
		handle: "@Canada",
		date: "14h",
		content: "💖 💖 💖 ",
		image:
			"https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&w=1000&q=80",
		avatar:
			"https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-1/p100x100/60866478_10211922015445992_2856027091470647296_n.jpg?_nc_cat=108&_nc_sid=dbb9e7&_nc_ohc=GAa-u5OF7lUAX-9f2Ge&_nc_ht=scontent-mia3-1.xx&_nc_tp=6&oh=45e36e7253f3a1f7207e9ea22653e253&oe=5F170970",
		comments: 23,
		retweets: 21,
		hearts: 300,
	},
	{
		id: 6,
		name: "Elvin 🐦",
		handle: "@CoolGuyNiceGuy",
		date: "21h",
		content: "🔥 Wow, TypeScript rules! 🔥",
		image: null,
		avatar:
			"https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-1/p100x100/11707636_10205149398269638_4862771165056947506_n.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_ohc=qVCMq-4vs9QAX9JPlJX&_nc_ht=scontent-mia3-1.xx&_nc_tp=6&oh=e2971c22e97f22a42d250d138a71e55d&oe=5F17BA15",
		comments: 64,
		retweets: 287,
		hearts: 400,
	},
	{
		id: 3,
		name: "🚀 Geordan",
		handle: "@FaneFromDOS2",
		date: "14h",
		content: "For all the dads out there",
		image:
			"https://scontent-mia3-1.xx.fbcdn.net/v/t1.15752-9/104998947_1101225600262152_8820685974311130881_n.png?_nc_cat=108&_nc_sid=b96e70&_nc_ohc=WpdzgFweaW8AX9d5Pw5&_nc_ht=scontent-mia3-1.xx&oh=dbccca927a86115e2585d5c526a494e4&oe=5F163C5E",
		avatar:
			"https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-1/c0.17.100.100a/p100x100/94420361_10212477891260721_6051261027713024000_o.jpg?_nc_cat=108&_nc_sid=dbb9e7&_nc_ohc=KG-6Kku_alAAX_K9gcW&_nc_ht=scontent-mia3-1.xx&oh=ed7293b9213198c593185c586cc9718a&oe=5F168FFE",
		comments: 23,
		retweets: 21,
		hearts: 300,
	},
	{
		id: 4,
		name: "Elvin 🐦",
		handle: "@CoolGuyNiceGuy",
		date: "20h",
		content: "This is Art",
		image:
			"https://scontent-mia3-2.xx.fbcdn.net/v/t1.15752-9/s2048x2048/104049203_704942840296383_4765708587480672399_n.png?_nc_cat=107&_nc_sid=b96e70&_nc_ohc=F_79W3PF2BUAX-BWuKc&_nc_ht=scontent-mia3-2.xx&oh=242dcf9756b6555cd87bc4c02783db80&oe=5F19632E",
		avatar:
			"https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-1/p100x100/11707636_10205149398269638_4862771165056947506_n.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_ohc=qVCMq-4vs9QAX9JPlJX&_nc_ht=scontent-mia3-1.xx&_nc_tp=6&oh=e2971c22e97f22a42d250d138a71e55d&oe=5F17BA15",
		comments: 64,
		retweets: 87,
		hearts: 400,
	},
	{
		id: 5,
		name: "🌈 Frank",
		handle: "@ThisGuyIsNextLevel",
		date: "10h",
		content: "This is a triumph",
		image:
			"https://scontent-mia3-1.xx.fbcdn.net/v/t1.15752-9/104609754_2718716785024978_481454144884895498_n.png?_nc_cat=101&_nc_sid=b96e70&_nc_ohc=jfO-lpaEYJUAX97a5n1&_nc_ht=scontent-mia3-1.xx&oh=a3c3d0db97e7f329d4920e55761429e5&oe=5F175416",
		avatar:
			"https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-1/p100x100/12742580_10154476694458943_1583014852658386152_n.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_ohc=91QWqUC7E4EAX9P5zY4&_nc_ht=scontent-mia3-1.xx&_nc_tp=6&oh=0eea03f81af7463afb06fab088c0afd0&oe=5F188CF0",
		comments: 12,
		retweets: 36,
		hearts: 175,
	},
];

type NotificationTweetProps = React.ComponentProps<typeof NotificationTweet>;

export const mockNotificationTweets: Array<NotificationTweetProps> = [
	{
		id: 1,
		type: "twitter",
		content:
			"In any case, the focus is not react navigation, but the possibility of writing your app once and running it on several different platforms.  Then you use the technology you want, for example for the interface, I choose @rn_paper",
		name: "Leandro Fevre",
		people: [
			{
				name: "Evan Bacon 🥓",
				image:
					"https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-1/p100x100/99274645_1585213041656753_2819858488971231232_n.jpg?_nc_cat=101&_nc_sid=dbb9e7&_nc_ohc=akSMF7UQ3KEAX8bpp9R&_nc_ht=scontent-mia3-1.xx&_nc_tp=6&oh=54b0d07a34c37dde64bc96e9e8f3326d&oe=5F180A6D",
			},
			{
				name: "Gavin 🤖",
				image:
					"https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-1/p100x100/60866478_10211922015445992_2856027091470647296_n.jpg?_nc_cat=108&_nc_sid=dbb9e7&_nc_ohc=GAa-u5OF7lUAX-9f2Ge&_nc_ht=scontent-mia3-1.xx&_nc_tp=6&oh=45e36e7253f3a1f7207e9ea22653e253&oe=5F170970",
			},
		],
	},
	{
		id: 2,
		type: "retweet",
		content: "It's finally somewhat bright on my way to work 🥳",
		name: "Tomasz Łakomy",
		people: [
			{
				name: "Wojteg1337",
				image: "https://pbs.twimg.com/profile_images/1164452902913675264/cn3bEqJp_400x400.jpg",
			},
		],
	},
	{
		id: 3,
		type: "like",
		content:
			'What they say during code review:\n\n"I see your point, but this is extra work - how about we create a ticket for it and get to it next sprint?"\n\nWhat they mean:\n\n"I literally don\'t give a single shit about it and this ticket will rot in the backlog for eternity"',
		name: "Tomasz Łakomy",
		people: [
			{
				name: "Elvin 🐦",
				image:
					"https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-1/p100x100/11707636_10205149398269638_4862771165056947506_n.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_ohc=qVCMq-4vs9QAX9JPlJX&_nc_ht=scontent-mia3-1.xx&_nc_tp=6&oh=e2971c22e97f22a42d250d138a71e55d&oe=5F17BA15",
			},
		],
	},
	{
		id: 4,
		type: "follow",
		content:
			"In any case, the focus is not react navigation, but the possibility of writing your app once and running it on several different platforms.  Then you use the technology you want, for example for the interface, I choose @rn_paper",
		name: "Leandro Fevre",
		people: [
			{
				name: "Evan Bacon 🥓",
				image: "https://pbs.twimg.com/profile_images/1203624639538302976/h-rvrjWy_400x400.jpg",
			},
			{
				name: "Leandro Favre",
				image: "https://pbs.twimg.com/profile_images/1181019042557173760/a1C7MHkM_400x400.jpg",
			},
		],
	},
	{
		id: 5,
		type: "like",
		content: "It's finally somewhat bright on my way to work 🥳",
		name: "Tomasz Łakomy",
		people: [
			{
				name: "Wojteg1337",
				image: "https://pbs.twimg.com/profile_images/1164452902913675264/cn3bEqJp_400x400.jpg",
			},
		],
	},
	{
		id: 6,
		type: "retweet",
		content:
			'What they say during code review:\n\n"I see your point, but this is extra work - how about we create a ticket for it and get to it next sprint?"\n\nWhat they mean:\n\n"I literally don\'t give a single shit about it and this ticket will rot in the backlog for eternity"',
		name: "Tomasz Łakomy",
		people: [
			{
				name: "Nader Dabit",
				image: "https://pbs.twimg.com/profile_images/1167093599600816129/APWfpd5O_400x400.jpg",
			},
		],
	},
];
