const Budget = () => {
    const countID = 4;
    const rectangles = [
        { id: 1, text: 'Rectangle 1' },
        { id: 2, text: 'Rectangle 2' },
        { id: 3, text: 'Rectangle 3' },
      ];

      function clickMe() {
        alert("You clicked me!");
      }

      function addRectangle() {
        rectangles.push({id: countID, text: "Rectangle "});
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