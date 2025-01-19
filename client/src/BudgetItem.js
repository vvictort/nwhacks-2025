import './App.css'
import React, { useState } from 'react';

const BudgetItem = (props) => {
    function clickMe() {
        alert("You clicked me!");
      }

    // const [isFormVisible, setIsFormVisible] = useState(false);

    // const openForm = () => {
    // setIsFormVisible(true);
    // };

    // const closeForm = () => {
    // setIsFormVisible(false);
    // };

    const [buttonText, setButtonText] = useState("Click me");
    const [inputText, setInputText] = useState("");
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [changed, setChanged] = useState(false);

    const handleButtonClick = () => {
        setIsInputVisible(true);
    };

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setButtonText(inputText);
        setIsInputVisible(false);
        setChanged(true);
    };

    const handleChange = () => {
        setChanged(true);
    }
      
    return ( 
        <div>
        <button type="button" onClick={handleButtonClick} 
            key={props.id}
            style={{

            width: '200px',
            height: '50px',
            backgroundColor: 'lightblue',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '5px',
            }}
        >
            {changed ? inputText : props.text}
        </button>

        <div className="App">

        {isInputVisible && (
            <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputText}
                onChange={handleInputChange}
                placeholder="Enter new button text" 
            />
            <button type="submit">Close</button>
            </form>
        )}
        </div>

        {/* <div className="App">

        {isFormVisible && (
        <div className="form-popup">
            <div className="form-container">
            <h2>Contact Us</h2>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <button type="submit">Submit</button>
                <button type="button" className="cancel-btn" onClick={closeForm}>Close</button>
            </form>
            </div>
        </div>
        )}
        </div> */}
        </div>
    );
}
 
export default BudgetItem;