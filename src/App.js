import React, { Component } from "react";
import Navbar from "./components/Navbar.js";
import TileContainer from "./components/TileContainer.js";
import memes from "./memes.json";

class App extends Component {
    state = {
        "memes": memes,
        "score": 0,
        "topscore": 0,
        "message": "Click All The Memes!"
    };

    componentDidMount() {
        console.log(this.state.memes);
    }

    tileClick = (id) => {
        for(let i = 0; i < this.state.memes.lenght; i++)
        {
            if(this.state.memes[i].id === id)
            {
                if(this.state.memes[i].clicked === false)
                {
                    this.state.memes[i].clicked = true;
                    //shuffle
                }
            }
        }
    };

    render() {
        return (
            <div>
                <Navbar message = {this.state.message} score = {this.state.score} topscore = {this.state.topscore}/>
                <TileContainer memes={this.state.memes} tileClick={this.tileClick}/>
            </div>
        );
    }
}

export default App;