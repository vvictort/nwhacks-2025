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
        const newRectangle = { id: rectangles.length + 1, text: `Budget Item ${rectangles.length + 1}` };
        setRectangles([...rectangles, newRectangle]);
    };
      
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {rectangles.map((rectangle) => (
            <BudgetItem
                id={rectangle.id}
                text = {rectangle.text}
            />
          ))}
          <button type="button" onClick={addRectangle}
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
        </div>
      );
      
};
 
export default Budget;