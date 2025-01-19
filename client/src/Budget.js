import React, { useState, useEffect } from 'react';

import BudgetItem from './BudgetItem';
import Shop from './Shop';

const Budget = ({nuggets, setNuggets}) => {
    const today = new Date();
    const date = today. getDate();
    const [rectangles, setRectangles] = useState([
        {id: 0, text: "Rent/Utilities", budgetAmount: 100, leftAmount: 100}, 
        {id: 1, text: "Education", budgetAmount: 100, leftAmount: 100},
        {id: 2, text: "Entertainment", budgetAmount: 100, leftAmount: 100},
        {id: 3, text: "Groceries", budgetAmount: 100, leftAmount: 100},
        {id: 4, text: "Eating Out", budgetAmount: 100, leftAmount: 100}]);
         
  const addRectangle = () => {
    const newRectangle = { id: rectangles.length + 1, text: currentName, budgetAmount: budgetAmount, leftAmount: leftAmount};
    setRectangles([...rectangles, newRectangle]);
  };

  const removeRectangle = (nameToRemove) => {
    setRectangles(rectangles.filter(rectangle => rectangle.text !== nameToRemove));
    // console.log(rectangles);
  };

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isDeleteFormVisible, setIsDeleteFormVisible] = useState(false);
  const [currentName, setCurrentName] = useState("");
  const [nameToRemove, setNameToRemove] = useState("");
  const [budgetAmount, setBudgetAmount] = useState(0);
  const [leftAmount, setLeftAmount] = useState(0);
//   const [numberMet, setNumberMet] = useState(0);

  const handleBudgetChange = (event) => {
    setBudgetAmount(event.target.value);
  };

  const openForm = () => {
    setIsFormVisible(true);
    console.log(rectangles);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRectangle();
    closeForm();
  };

  const handleNameSet = (event) => {
    setCurrentName(event.target.value);
  };

  const distributeNuggets = () => {
    
  };

  const totalPutAmount = rectangles.reduce((sum, rectangle) => sum + rectangle.leftAmount, 0);
  const numberMet = rectangles.reduce((sum, rectangle) => sum + (rectangle.leftAmount >= 0), 0);
  const numNuggets = numberMet * 10 + (rectangles.length - numberMet) * (-25);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    {date == 18 && (<h2>It's the start of a new month! You met your budget for {numberMet} budget goals. 
        You failed to meet {rectangles.length - numberMet} budget goals. Total nuggest distribution for this month: {numNuggets}. 
        All amounts are reset</h2>)}
    {date == 18 && distributeNuggets}

        <h2>You still have ${totalPutAmount} left that you can spend.</h2>
        {numberMet == rectangles.length && (<div><h2>You are meeting {numberMet} of your budget goals</h2> <h2>Slyther is happy.</h2> </div>)}
        {numberMet < rectangles.length && (<div><h2>You did not meet all of your budget goals</h2> <h2>Slyther is sad.</h2> </div>)}

      {rectangles.map((rectangle) => (
        <BudgetItem
          key={rectangle.id}
          id={rectangle.id}
          text={rectangle.text}
          budgetAmount={rectangle.budgetAmount}
          leftAmount = {rectangle.leftAmount}
          rectangles = {rectangles}
          setRectangles = {setRectangles}
        />
      ))}
      <button className="add-button" type="button" onClick={openForm}>
        +
      </button>

      <div className="Addition-Form">

        {isFormVisible && (
          <div className="form-popup">
            <div className="form-container">
              <h2>Add Budget Item</h2>
              <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required
                  text={currentName} onChange={handleNameSet} /><br/>

                <label htmlFor="name">Budgeted Amount</label>
                <input type="number" step="0.01" id="budgetAmount" name="budgetAmount" required
                  text={budgetAmount} onChange={handleBudgetChange} />
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