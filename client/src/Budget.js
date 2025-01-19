import React, { useState } from 'react';

const Budget = () => {
    const [rectangles, setRectangles] = useState([]);

    const addRectangle = () => {
        const newRectangle = { id: rectangles.length + 1, text: `Rectangle ${rectangles.length + 1}` };
        setRectangles([...rectangles, newRectangle]);
    };

      function clickMe() {
        alert("You clicked me!");
      }
      
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {rectangles.map((rectangle) => (
            <button type="button" onClick={clickMe}
              key={rectangle.id}
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
              {rectangle.text}
            </button>
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