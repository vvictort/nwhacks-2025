import Budget from "./Budget";
import Shop from "./Shop";
import Character from "./Character";
import { useState } from "react";
import "./Home2.css";
import profileImage from "./images.jpg"; // Import the image


const Home2 = () => {
    const [charInfo, setCharInfo] = useState({
        "Sweater": false,
        "Fire": false,
        "Antlers": false
    });

    const [nuggets, setNuggets] = useState(10000); // Alvin pls change later

    return (
        <div className="home">
            <div className="profile-picture">
                <img src={profileImage} alt="Profile" />
            </div>
            <div className="icon inbox-icon">
                <i className="fas fa-inbox"></i>
            </div>
            <div className="icon notification-icon">
                <i className="fas fa-bell"></i>
            </div>
            <div className="search-bar-container">
                <div className="search-bar-wrapper">
                    <span className="search-icon">&#128269;</span>
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search..."
                    />
                </div>
            </div>
            <div className="home-buttons">
                <button className="home-button"><h3 style={{ marginTop: "0", marginBottom: "0" }}>Overview</h3></button>
                <button className="home-button"><h3 style={{ marginTop: "0", marginBottom: "0" }}>Finance</h3></button>
                <button className="home-button"><h3 style={{ marginTop: "0", marginBottom: "0" }}>Calendar</h3></button>
            </div>
            <h2 style={{ textAlign: 'left', marginLeft: '-950px', marginBottom: '7px', marginTop: '0px' }}>My Wallet</h2>
            <div className="wallet-panel">
                <p>Your Default Wallet</p>
            </div>
            <h2 style={{ textAlign: 'left', marginLeft: '-950px', marginBottom: '2px', marginTop: '4px' }}>Summary</h2>
            <div className="main-panel">

            </div>
            {/* <Character></Character> */}
            <h2 style={{ textAlign: 'left', marginLeft: '-800px', marginBottom: '0px', marginTop: '15px' }}>Categories of Expense</h2>
            <div className="categories">

            </div>
            <Shop></Shop>

        </div>
    );
}

export default Home2;