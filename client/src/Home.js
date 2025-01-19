import Budget from "./Budget";
import Game from "./Game";
import Character from "./Character";

const Home = () => {
    return ( 
        <div className="home">
            <Budget />
            <Character></Character>
        </div>
    );
}
 
export default Home;