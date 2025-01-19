import React, { useState } from 'react';

import BudgetItem from './BudgetItem';

const Budget = ({nuggets, setNuggets}) => {
    const today = new Date();
    const date = today. getDate();
    const [rectangles, setRectangles] = useState([
        {id: 0, text: "Rent/Utilities", budgetAmount: 100}, 
        {id: 1, text: "Education", budgetAmount: 100},
        {id: 2, text: "Entertainment", budgetAmount: 100},
        {id: 3, text: "Groceries", budgetAmount: 100},
        {id: 4, text: "Eating Out", budgetAmount: 100}]);
         
  const addRectangle = () => {
    const newRectangle = { id: rectangles.length + 1, text: currentName, budgetAmount: budgetAmount };
    setRectangles([...rectangles, newRectangle]);

  };

  const removeRectangle = (nameToRemove) => {
    setRectangles(rectangles.filter(rectangle => rectangle.text !== nameToRemove));
  };

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isDeleteFormVisible, setIsDeleteFormVisible] = useState(false);
  const [currentName, setCurrentName] = useState("");
  const [nameToRemove, setNameToRemove] = useState("");
  const [budgetAmount, setBudgetAmount] = useState(0);

  const handleBudgetChange = (event) => {
    setBudgetAmount(event.target.value);
  };

  const openForm = () => {
    setIsFormVisible(true);
  };

  const openDeleteForm = () => {
    setIsDeleteFormVisible(true);
  }

  const closeForm = () => {
    setIsFormVisible(false);
  };

  const closeDeleteForm = () => {
    setIsDeleteFormVisible(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addRectangle();
  };

  const handleDeleteSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    removeRectangle(nameToRemove); // Call the remove function
    setNameToRemove(""); // Clear the input field
  };

  const handleNameSet = (event) => {
    setCurrentName(event.target.value);
  };

  const handleNameToRemove = (event) => {
    setNameToRemove(event.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {rectangles.map((rectangle) => (
        <BudgetItem
          id={rectangle.id}
          text={rectangle.text}
          budgetAmount={rectangle.budgetAmount}
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

      <button type="button" onClick={openDeleteForm}
        style={{

          width: '40px',
          height: '40px',
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '5px',
        }}
      >-
      </button>

      <div className="App">

        {isFormVisible && (
          <div className="form-popup">
            <div className="form-container">
              <h2>Add Budget Item</h2>
              <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required
                  text={currentName} onChange={handleNameSet} />

                <label htmlFor="name">Budgeted Amount</label>
                <input type="number" id="budgetAmount" name="budgetAmount" required
                  text={budgetAmount} onChange={handleBudgetChange} />

                <button type="submit" className='form-btn' onClick={handleSubmit}>Submit</button>
                <button type="button" className="cancel-btn form-btn" onClick={closeForm}>Close</button>
              </form>
            </div>
          </div>
        )}

        {isDeleteFormVisible && (
          <div className="form-popup">
            <div className="form-container">
              <h2>Remove Budget Item</h2>
              <form>
                <label htmlFor="name">Name to Remove</label>
                <input type="text" id="name" name="name" required
                  text={currentName} onChange={handleNameToRemove} />

                {/* <label htmlFor="name">Budgeted Amount</label>
                <input type="number" id="budgetAmount" name="budgetAmount" required
                  text={budgetAmount} onChange={handleBudgetChange} /> */}

                <button type="submit" className='form-btn' onClick={handleDeleteSubmit}>Submit</button>
                <button type="button" className="cancel-btn form-btn" onClick={closeDeleteForm}>Close</button>
              </form>
            </div>
          </div>
        )}
      </div>

    </div>


  );

};

export default Budget;