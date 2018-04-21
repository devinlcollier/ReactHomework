import React from "react";

const Meme = props => (
	<div 
	className="thumbnail"
	onClick={() => props.tileClick(props.id)}
	>
		<img 
		src={"./img/" + props.img} 
		className="img img-responsive" 
		id={props.id} 
		alt={props.id} 
		/>
	</div>
);

export default Meme;