import Budget from "./Budget";
import Shop from "./Shop";
import Character from "./Character";
import { useState } from "react";

const Home = () => {
    const [charInfo, setCharInfo] = useState({
        "Sweater": false,
        "Fire": false,
        "Antlers": false
    });
    const [nuggets, setNuggets] = useState(10000);
    return (
        <div className="home">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '100vh' }}>
                <Budget nuggets={nuggets} setNuggets={setNuggets} />
                <Shop nuggets={nuggets} setNuggets={setNuggets} charInfo={charInfo} setCharInfo={setCharInfo} />
                <Character charInfo={charInfo} />
            </div>
        </div>
    );
}

export default Home;