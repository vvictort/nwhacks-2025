import React, { useState } from 'react';

import BudgetItem from './BudgetItem';

const Budget = () => {
    const [rectangles, setRectangles] = useState([
        {id: 0, text: "Rent/Utilities"}, 
        {id: 1, text: "Education"},
        {id: 2, text: "Entertainment"},
        {id: 3, text: "Groceries"},
        {id: 4, text: "Eating Out"}]);

    const addRectangle = () => {
        const newRectangle = { id: rectangles.length + 1, text: `Budget Item ${rectangles.length + 1}`, budgetAmount: budgetAmount };
        setRectangles([...rectangles, newRectangle]);
        
    };

    const [isFormVisible, setIsFormVisible] = useState(false);
    const [currentName, setCurrentName] = useState("");
    const [budgetAmount, setBudgetAmount] = useState(0);

    const handleBudgetChange = (event) => {
        setBudgetAmount(event.target.value);
    };
    
    const openForm = () => {
    setIsFormVisible(true);
    };

    const closeForm = () => {
    setIsFormVisible(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addRectangle();
    };
      
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {rectangles.map((rectangle) => (
            <BudgetItem
                id={rectangle.id}
                text = {rectangle.text}
                budgetAmount = {budgetAmount}
            />
          ))}
          <button type="button" onClick={openForm}
          style={{

            width: '40px',
            height: '40px',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '5px',
          }}
          >+
          </button>

          <div className="App">

            {isFormVisible && (
            <div className="form-popup">
                <div className="form-container">
                <h2>Add Budget Item</h2>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="name">Budgeted Amount</label>
                    <input type="number" id="budgetAmount" name="budgetAmount" required 
                    text = {budgetAmount} onChange={handleBudgetChange}/>

                    <button type="submit" className='form-btn' onClick={handleSubmit}>Submit</button>
                    <button type="button" className="cancel-btn form-btn" onClick={closeForm}>Close</button>
                </form>
                </div>
            </div>
            )}
            </div>
          
        </div>


      );
      
};
 
export default Budget;