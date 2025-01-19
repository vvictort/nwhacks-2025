const BudgetItem = (props) => {
    function clickMe() {
        alert("You clicked me!");
      }
      
    return ( 
        <button type="button" onClick={clickMe}
            key={props.id}
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
            {props.text}
        </button>
    );
}
 
export default BudgetItem;