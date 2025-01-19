

const ShopItem = ({ item, handlePurchase }) => {
    return (
        <div key={item.id} style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
            width: "150px",
            textAlign: "center",
            backgroundColor: "#fff",
        }}>
            <h3>{item.name}</h3>
            <p>Price: {item.price} nuggets</p>
            <button
                onClick={() => handlePurchase(item)}
                disabled={item.purchased}
                style={{
                    padding: "8px 12px",
                    backgroundColor: item.purchased ? "grey" : "green",
                    color: "#fff",
                }}>
                Buy
            </button>
        </div>
    )
}

export default ShopItem;