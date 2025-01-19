import './App.css';
import "./Budget.css";
import React, { useState } from 'react';

const BudgetItem = (props) => {
    function clickMe() {
        alert("You clicked me!");
      }

    
    var newPut = 0;
    const today = new Date();
    const date = today. getDate();

    const [overBudget, setOverBudget] = useState(false);
    const [buttonText, setButtonText] = useState("Click me");
    const [putAmount, setPutAmount] = useState(0);
    const [budgetedAmount, setBudgetedAmount] = useState(0);
    const [inputText, setInputText] = useState("");
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [changed, setChanged] = useState(false);

    const handleButtonClick = () => {
        setIsInputVisible(!isInputVisible);
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
            if (newPut > props.budgetAmount) {
                setOverBudget(true);
                alert("Gone over budget!");
            }
        }
    }

    const setAmountsToZero = () => {
        setPutAmount(0);
    }

    const handleDelete = () => {
        props.setRectangles(props.rectangles.filter(rectangle => rectangle.id !== props.id))
    }
    
      
    return ( 
        <div>
        {date == 18 && setAmountsToZero}
            
        <button type="button" onClick={handleButtonClick} 
            key={props.id}
            style={{

            width: '12em',
            height: '3em',
            backgroundColor: 'lightblue',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '5px',
            padding: "10px",
            }}
        >
            {changed ? inputText : props.text} <hr></hr>
            <p style={{color: overBudget ? 'red' : 'black'}}>{putAmount}</p>/{props.budgetAmount}
            
        </button>
        
        <div className="App">

        {isInputVisible && (
            <form onSubmit={handleSubmit} style={{backgroundColor: "white"}}>
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
            <button id="delete-budget" onClick={handleDelete}>Delete</button>
            <button type="submit" onClick={updatePutState}>Submit</button>
            </form>
        )}
        </div>

        
        </div>
    );
}
 
export default BudgetItem;