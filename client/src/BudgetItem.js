const BudgetItem = (props) => {
    return ( 
        <div className="budgetItem">
            <button type="button"
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
        </div>
    );
}
 
export default BudgetItem;