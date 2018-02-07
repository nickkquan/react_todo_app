import React, { Component } from "react";
import axios from "axios";

import ToDoList from "./todo_list";
import AddForm from "./add_form";

import "materialize-css/dist/css/materialize.min.css";

const BASE_URL = "http://api.reactprototypes.com";
const API_KEY = "?key=nickquan";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list: []
		};
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.toggleComplete = this.toggleComplete.bind(this);
	}

	componentDidMount() {
		this.getData();
	}

	getData() {
		axios
			.get(`${BASE_URL}/todos${API_KEY}`)
			.then(response => {
				console.log("Server response:", response.data);
				this.setState({
					list: response.data.todos
				});
			})
			.catch(error => {
				console.log("server error:", error);
			});
	}

	addItem(item) {
		axios
			.post(`${BASE_URL}/todos${API_KEY}`, item)
			.then(response => {
				console.log("Server add response:", response);
				this.getData();
			})
			.catch(error => {
				console.log("Server add error reponse:", error);
			});
	}

	deleteItem(id) {
		console.log("Delete ID:", id);
		axios
			.delete(`${BASE_URL}/todos/${id + API_KEY}`)
			.then(response => {
				console.log("Server delete success response", response);
				this.getData();
			})
			.catch(error => {
				console.log("Server delete error", error);
			});
	}

	toggleComplete(id) {
		axios
			.put(`${BASE_URL}/todos/${id + API_KEY}`)
			.then(response => {
				console.log("Toggle completed success response", response);
				this.getData();
			})
			.catch(error => {
				console.log("Toggle completed error response:", error);
			});
	}

	render() {
		return (
			<div className="container">
				<h1 className="center-align">To Do App</h1>
				<AddForm add={this.addItem} />
				<ToDoList list={this.state.list} delete={this.deleteItem} toggle={this.toggleComplete} />
			</div>
		);
	}
}

export default App;
