import React from "react";
import Router from '../router'

import "./App.css";

import Nav from "./Nav/Nav";

export function App( { children } ) {
	return (
		<div className="app">
			<Nav />
			<Router />
		</div>
	);
}

export default App;
