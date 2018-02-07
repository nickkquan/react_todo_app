import React, { Component } from "react";

class AddForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			details: ""
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.addItem = this.addItem.bind(this);
	}

	handleInputChange(event) {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	}

	addItem(event) {
		event.preventDefault();
		console.log("Form values:", this.state);
		this.props.add(this.state);
		this.setState({
			title: "",
			details: ""
		});
	}

	render() {
		const { title, details } = this.state;

		return (
			<div className="row">
				<form onSubmit={this.addItem} className="col s12">
					<div className="row">
						<div className="input-field col s6">
							<input
								name="title"
								onChange={this.handleInputChange}
								placeholder="Item Title"
								type="text"
								value={title}
							/>
						</div>
						<div className="input-field col s6">
							<input
								name="details"
								onChange={this.handleInputChange}
								placeholder="Item Details"
								type="text"
								value={details}
							/>
						</div>
					</div>
					<div className="right-align">
						<button className="btn blue lighten-2">ADD ITEM</button>
					</div>
				</form>
			</div>
		);
	}
}

export default AddForm;
