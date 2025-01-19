import Budget from "./Budget";
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
            <Budget nuggets={nuggets} setNuggets={setNuggets}/>
            <Character charInfo={charInfo}/>
        </div>
    );
}

export default Home;