import React from "react";
import Tile from "./Tile.js";

const cont_style = {
	marginTop : "3.5%"
};

const TileContainer = props => (
	<div className="container" style={cont_style}>
		<div className="row">
			{props.memes.slice(0, 4).map((tile, index, tiles) =>(
				<div className="col-md-3">
					<Tile img={tile.img} id={tile.id} tileCLick={props.tileClick(tile.id)}/>
				</div>
			))}
		</div>
		<div className="row">
			{props.memes.slice(4, 8).map((tile, index, tiles) =>(
				<div className="col-md-3">
					<Tile img={tile.img} id={tile.id} tileCLick={props.tileClick(tile.id)}/>
				</div>
			))}
		</div>
		<div className="row">
			{props.memes.slice(8, 13).map((tile, index, tiles) =>(
				<div className="col-md-3">
					<Tile img={tile.img} id={tile.id} tileCLick={props.tileClick(tile.id)}/>
				</div>
			))}
		</div>
	</div>
);

export default TileContainer;