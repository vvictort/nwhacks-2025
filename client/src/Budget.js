import React, { useState, useEffect } from 'react';

import BudgetItem from './BudgetItem';
import Shop from './Shop';

const Budget = ({nuggets, setNuggets}) => {
    const today = new Date();
    const date = today. getDate();
    const [budgetItems, setBudgetItems] = useState([
        {id: 0, text: "Rent/Utilities", budgetAmount: 100, leftAmount: 100}, 
        {id: 1, text: "Education", budgetAmount: 100, leftAmount: 100},
        {id: 2, text: "Entertainment", budgetAmount: 100, leftAmount: 100},
        {id: 3, text: "Groceries", budgetAmount: 100, leftAmount: 100},
        {id: 4, text: "Eating Out", budgetAmount: 100, leftAmount: 100}]);
         
  const addItem = () => {
    const newBudget = { id: budgetItems.length + 1, text: currentName, budgetAmount: budgetAmount, leftAmount: leftAmount};
    setBudgetItems([...budgetItems, newBudget]);
  };

  const removeBudgetItem = (nameToRemove) => {
    setBudgetItems(budgetItems.filter(budgetItem => budgetItem.text !== nameToRemove));
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
    var amount = Number(event.target.value);
    setLeftAmount(amount);
  };

  const openForm = () => {
    setIsFormVisible(true);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem();
    closeForm();
  };

  const handleNameSet = (event) => {
    setCurrentName(event.target.value);
  };

  const distributeNuggets = () => {
 
  };

  const totalPutAmount = budgetItems.reduce((sum, budgetItem) => sum + budgetItem.leftAmount, 0);
  const numberMet = budgetItems.reduce((sum, budgetItem) => sum + (budgetItem.leftAmount >= 0), 0);
  const numNuggets = numberMet * 10 + (budgetItems.length - numberMet) * (-25);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', zIndex: 0}}>
    {date == 18 && (<h2>It's the start of a new month! You met your budget for {numberMet} budget goals. 
        You failed to meet {budgetItems.length - numberMet} budget goals. Total nuggets distribution for this month: {numNuggets}. 
        All amounts are reset</h2>)}
    {date == 18 && distributeNuggets}

      {budgetItems.map((budgetItem) => (
        <BudgetItem
          key={budgetItem.id}
          id={budgetItem.id}
          text={budgetItem.text}
          budgetAmount={budgetItem.budgetAmount}
          leftAmount = {budgetItem.leftAmount}
          budgetItems = {budgetItems}
          setBudgetItems = {setBudgetItems}
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
                <label htmlFor="name" style={{marginRight: "10px"}}>Name</label>
                <input type="text" id="name" name="name" style={{border:"1px solid black", borderRadius:"5px"}} required
                  text={currentName} onChange={handleNameSet} /><br/>

                <label htmlFor="name">Budgeted Amount</label>
                <input type="number" step="0.01" id="budgetAmount" name="budgetAmount" 
                style={{border:"1px solid black", borderRadius:"5px"}} required
                  text={budgetAmount} onChange={handleBudgetChange} />
                  <br></br>
                <button type="submit" className='form-btn' style={{margin:"5px"}} onClick={handleSubmit}>Submit</button>
                <button type="button" className="cancel-btn form-btn" onClick={closeForm}>Close</button>
              </form>
            </div>
          </div>
        )}
      </div>
      <div>
        <h4>You still have ${totalPutAmount} left that you can spend.</h4> 
        {numberMet == budgetItems.length && (<div><h4>You are meeting {numberMet} of your budget goals.</h4> <h4>Slyther is happy.</h4> </div>)}
        {numberMet < budgetItems.length && (<div><h2>You did not meet all of your budget goals</h2> <h2>Slyther is sad.</h2> </div>)}
        </div>
      

    </div>


  );

};

export default Budget;