import React from "react";
import { RouteProp } from "@react-navigation/native";
import { FeedStackParamList } from "../types";
import { DetailedTweet } from "../Components/DetailedTweet";
import { StackNavigationProp } from "@react-navigation/stack";

type DetailsRouteProp = RouteProp<FeedStackParamList, "Details">;
type DetailsNavigationProp = StackNavigationProp<FeedStackParamList, "Details">;

type Props = {
	route: DetailsRouteProp;
	navigation: DetailsNavigationProp;
};

export const Details = (props: Props) => {
	return <DetailedTweet {...props} />;
};
