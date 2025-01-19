import React, { useState } from 'react';

import BudgetItem from './BudgetItem';

const Budget = ({nuggets, setNuggets}) => {
    const [rectangles, setRectangles] = useState([
        {id: 0, text: "Rent/Utilities", budgetAmount: 100}, 
        {id: 1, text: "Education", budgetAmount: 100},
        {id: 2, text: "Entertainment", budgetAmount: 100},
        {id: 3, text: "Groceries", budgetAmount: 100},
        {id: 4, text: "Eating Out", budgetAmount: 100}]);

    const addRectangle = () => {
        const newRectangle = { id: rectangles.length + 1, text: currentName, budgetAmount: budgetAmount};
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

    const handleNameSet = (event) => {
        setCurrentName(event.target.value);
    };
      
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {rectangles.map((rectangle) => (
            <BudgetItem
                id={rectangle.id}
                text = {rectangle.text}
                budgetAmount = {rectangle.budgetAmount}
            />
          ))}
          <button className="add-button" type="button" onClick={openForm}>
            +
          </button>

          <div className="App">

            {isFormVisible && (
            <div className="form-popup">
                <div className="form-container">
                <h2>Add Budget Item</h2>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required 
                    text = {currentName} onChange={handleNameSet}/>

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