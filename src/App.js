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
        this.setState({"memes" : this.aryShuffle(this.state.memes)});
    }

    getRandomInt = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    aryShuffle = function(a)
    {
        for(let i = 0; i < a.length; i++)
        {
            let new_spot = this.getRandomInt(0, a.length);
            let swap = a[new_spot];
            a[new_spot] = a[i];
            a[i] = swap;
        }
        return a;
    }

    tileClick = (id) => {
        console.log("id: " + id);
        let memes_local = this.state.memes;
        for(let i = 0; i < memes_local.length; i++)
        {
            if(memes_local[i].id === id)
            {
                console.log("found " + id);
                if(memes_local[i].clicked === false)
                {
                    memes_local[i].clicked = true;
                    //this.setState({score : this.state.score + 1});
                    if(this.state.score + 1 > this.state.topscore)
                    {
                        this.setState({topscore : this.state.score});
                    }
                    this.setState({score : this.state.score + 1});
                }
            }
        }

        this.setState({memes : memes_local});
        console.log(this.state.memes);
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