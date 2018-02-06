import React, { Component } from "react";

class AddForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			details: ""
		};

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	}

	render() {
		const { title, details } = this.state;

		return (
			<div className="row">
				<form className="col s12">
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
						<button className="btn green lighten-1"> Add Item </button>
					</div>
				</form>
			</div>
		);
	}
}

export default AddForm;
