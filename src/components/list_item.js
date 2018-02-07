import React from "react";

export default props => {
	let status = props.complete ? "green-text text-darken-2" : "red-text text-darken-2";
	return (
		<li className="collection-item">
			<div className="row">
				<div className={`col s6 ${status}`}>{props.title}</div>
				<div className="col s6 right-align">
					<div className="row">
						<div className="col s10">
							<button onClick={props.delete} className="btn-floating red lighten-2">
								<i className="material-icons">delete_forever</i>
							</button>
						</div>
						<div className="col s2">
							<button onClick={props.toggle} className="btn-floating green lighten-2">
								<i className="material-icons">check_circle</i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};
