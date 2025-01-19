import './App.css'
import React, { useState } from 'react';

const BudgetItem = (props) => {
    function clickMe() {
        alert("You clicked me!");
      }

    

    const [buttonText, setButtonText] = useState("Click me");
    const [putAmount, setPutAmount] = useState(0);
    const [budgetedAmount, setBudgetedAmount] = useState(0);
    const [inputText, setInputText] = useState("");
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [changed, setChanged] = useState(false);

    const handleButtonClick = () => {
        setIsInputVisible(true);
        if (!changed) {
            setInputText(props.text);
        }
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
            {changed ? inputText : props.text} <br></br>
            {putAmount}/{props.budgetAmount}
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
            <button type="submit">Submit</button>
            </form>
        )}
        </div>

        
        </div>
    );
}
 
export default BudgetItem;