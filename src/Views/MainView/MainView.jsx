import React, { useEffect } from "react";

const MainView = () => {
	useEffect(() => {
		// eslint-disable-next-line
		console.log("[MainView.useEffect] this is a simple console!");
	}, []);

	return (
		<h1>MainView 1</h1>
	);
};

export default MainView;
