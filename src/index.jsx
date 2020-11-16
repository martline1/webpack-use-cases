import React                     from "react";
import { render }                from "react-dom";
import { Provider }              from "react-redux";
import { ThemeProvider }         from "@material-ui/styles";
import { Router, Route, Switch } from "react-router-dom";
import { CssBaseline }           from "@material-ui/core";

// Import Own Components
import { theme, history } from "~/Util";
import routes             from "~/Views/routes";
import Store              from "~/Store";
import "./index.css";

const App = () => (
	<>
		<CssBaseline />

		<ThemeProvider theme={theme}>
			<Router history={history}>
				<Provider store={Store}>
					<Switch>
						{ routes.map(route => (
							<Route {...route} key={route.path || "redirect"} />
						)) }
					</Switch>
				</Provider>
			</Router>
		</ThemeProvider>
	</>
);

const appContainer = document.querySelector("#app-container");

render(
	<App />,
	appContainer,
);
