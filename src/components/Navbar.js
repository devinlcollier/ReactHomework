import React from "react";

const Navbar = props => (
	<nav className="navbar navbar-default navbar-fixed-top">
		<div className="container">
			<div className="row">
				<div className="col-md-4">
					<p>Click The Meme's!</p>
				</div>
				<div className="col-md-4">
					<p>{props.message}</p>
				</div>
				<div className="col-md-4">
					<p>Score: {props.score} | Top Score: {props.topscore}</p>
				</div>
			</div>
		</div>
	</nav>
);

export default Navbar;