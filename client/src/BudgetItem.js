import './App.css'
import React, { useState } from 'react';

const BudgetItem = (props) => {
    function clickMe() {
        alert("You clicked me!");
      }

    
    var newPut = 0;
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

    // const handleBudgetChange = (event) => {
    //     setBudgetedAmount(event.target.value);
    // }

    const handlePutChange = (event) => {
        if (event.target.value) {
            newPut = Number(event.target.value) + putAmount;
        } else {
            newPut = putAmount;
        }
        
    }

    const updatePutState = () => {
        if (newPut != 0) {
            setPutAmount(newPut);
        }
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
            <label htmlFor="name">New name:</label>
            <input 
                type="text" 
                id="name"
                value={inputText}
                onChange={handleInputChange}
                placeholder="New name" 
            />
            <label htmlFor="add-amount">Add amount towards budget:</label>
            <input 
                type="number" 
                id="add-amount"
                onChange={handlePutChange}
                placeholder="Amount towards budget" 
            />
            {/* <input 
                type="number" 
                value={budgetedAmount}
                onChange={handleBudgetChange}
                placeholder="Budget Amount" 
            /> */}
            <button type="submit" onClick={updatePutState}>Submit</button>
            </form>
        )}
        </div>

        
        </div>
    );
}
 
export default BudgetItem;