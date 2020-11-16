import React        from "react";
import { Redirect } from "react-router-dom";

// Import Own Components
import MainView from "~/Views/MainView";

const routes = [
	{
		component : MainView,
		path      : "/",
		exact     : true,
	},
	{
		component : props => <Redirect {...props} to="/" />,
	},
];

export default routes;
