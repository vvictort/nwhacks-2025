import './App.css';
import "./Budget.css";
import React, { useState } from 'react';
import Budget from './Budget';

const BudgetItem = (props) => {
    function clickMe() {
        alert("You clicked me!");
      }

    
    var newPut = 0;
    const today = new Date();
    const date = today. getDate();

    const [overBudget, setOverBudget] = useState(false);
    const [buttonText, setButtonText] = useState("Click me");
    const [budgetedAmount, setBudgetedAmount] = useState(0);
    const [putAmount, setPutAmount] = useState(props.budgetAmount);
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
            newPut =  putAmount - Number(event.target.value);
        } else {
            newPut = putAmount;
        }
        
    }

    const updatePutState = () => {
        if (newPut != 0) {
            setPutAmount(newPut);
            props.setRectangles((prevRectangles) =>
                prevRectangles.map((rectangle) =>
                  rectangle.id === props.id ? { ...rectangle, leftAmount: newPut } : rectangle
                )
              );
            if (newPut < 0) {
                setOverBudget(true);
                alert("Gone over budget!");
            }
        }
    }

    const setAmountsToBase = () => {
        setPutAmount(props.budgetAmount);
    }

    const handleDelete = () => {
        props.setRectangles(props.rectangles.filter(rectangle => rectangle.id !== props.id))
    }
    
      
    return ( 
        <div>
        {date == 1 && setAmountsToBase}
            
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
            <p style={{color: overBudget ? 'red' : 'black'}}>{putAmount}$</p>/{props.budgetAmount}$
            
        </button>
        
        <div className="App">

        {isInputVisible && (
            <form onSubmit={handleSubmit} style={{backgroundColor: "white"}}>
            <label htmlFor="name" style={{padding: '10px'}}>New name:</label>
            <input 
                type="text" 
                id="name"
                value={inputText}
                onChange={handleInputChange}
                placeholder="New name" 
            />
            <label htmlFor="sub-amount" style={{padding: '10px'}}>Amount spent:</label>
            <input 
                type="number" 
                step="0.01"
                id="sub-amount"
                onChange={handlePutChange}
                placeholder="Amount spent" 
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