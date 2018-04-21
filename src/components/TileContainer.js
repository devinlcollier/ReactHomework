import React from "react";
import Tile from "./Tile.js";

const cont_style = {
	marginTop : "3.5%"
};

const TileContainer = props => (
	<div className="container" style={cont_style}>
		<div className="row">
			{props.memes.slice(0, 4).map((tile, index) =>(
				<div className="col-md-3" key={tile.id}>
					<Tile img={tile.img} id={tile.id} tileClick={props.tileClick}/>
				</div>
			))}
		</div>
		<div className="row">
			{props.memes.slice(4, 8).map((tile, index) =>(
				<div className="col-md-3" key={tile.id}>
					<Tile img={tile.img} id={tile.id} tileClick={props.tileClick}/>
				</div>
			))}
		</div>
		<div className="row">
			{props.memes.slice(8, 13).map((tile, index) =>(
				<div className="col-md-3" key={tile.id}>
					<Tile img={tile.img} id={tile.id} tileClick={props.tileClick}/>
				</div>
			))}
		</div>
	</div>
);

export default TileContainer;