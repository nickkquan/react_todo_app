import React from "react";
import ToDoList from "./todo_list";

import "materialize-css/dist/css/materialize.min.css";

const App = () => (
	<div className="container">
		<h1 className="center-align">To Do App</h1>
		<ToDoList />
	</div>
);

export default App;
