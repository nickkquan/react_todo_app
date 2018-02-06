import React from "react";

export default props => {
	return (
		<li className="collection-item">
			<div className="row">
				<div className="col s6">{props.title}</div>
				<div className="col s6 right-align">
					<button onClick={props.delete} className="btn-floating red lighten-2">
						<i className="material-icons">delete_forever</i>
					</button>
				</div>
			</div>
		</li>
	);
};
