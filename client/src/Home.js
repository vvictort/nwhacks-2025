import Budget from "./Budget";
import Shop from "./Shop";
import Game from "./Game";
import Character from "./Character";
import { useState } from "react";

const Home = () => {
    const [charInfo, setCharInfo] = useState({
        "sweater": "false",
        "flame": "false",
        "horns": "false"
    });
    const [nuggets, setNuggets] = useState(0);
    return ( 
        <div className="home">
            <Shop nuggets={nuggets} setNuggets={setNuggets} charInfo={charInfo} setCharInfo={setCharInfo}/>
            <Budget nuggets={nuggets} setNuggets={setNuggets}/>
            <Character charInfo={charInfo}/>
        </div>
    );
}

export default Home;