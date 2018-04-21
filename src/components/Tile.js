import React from "react";

const Meme = props => (
	<div class="thumbnail">
		<img src={"./img/" + props.img} className="img img-responsive" id={props.id} alt={props.id}/>
	</div>
);

export default Meme;