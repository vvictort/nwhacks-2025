import nuggetImage from './sprites/nugget.png';

const ShopItem = ({ item, handlePurchase }) => {
    return (
        <div key={item.id} style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "10px",
            width: "85px",
            textAlign: "center",
            backgroundColor: "#fff",
            transition: "box-shadow 0.3s ease",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
        }}>
            <h3 style={{
                margin: "0 0 10px 0",
                fontSize: "1.2em",
                color: "#333"
            }}>{item.name}</h3>
            <span style={{
                display: "flex",
            }}>
                <p style={{
                    margin: "0 0 10px 0",
                    fontSize: "1em",
                    color: "#666"
                }}>Price: </p>
                <img className="nugget-icon" src={nuggetImage} alt="nugget"></img>
                <p style={{
                    margin: "0 0 10px 0",
                    fontSize: "1em",
                    color: "#666"
                }}>{item.price}</p>
            </span>
            <button
                onClick={() => handlePurchase(item)}
                disabled={item.purchased}
                style={{
                    padding: "8px 12px",
                    backgroundColor: item.purchased ? "grey" : "green",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: item.purchased ? "not-allowed" : "pointer",
                    transition: "background-color 0.3s ease",
                    outline: "none"
                }}
                onMouseOver={(e) => {
                    if (!item.purchased) {
                        e.target.style.backgroundColor = "darkgreen";
                    }
                }}
                onMouseOut={(e) => {
                    if (!item.purchased) {
                        e.target.style.backgroundColor = "green";
                    }
                }}
            >
                Buy
            </button>
        </div>
    )
}

export default ShopItem;