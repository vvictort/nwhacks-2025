import { useState } from "react";

const Shop = () => {

    const [balance, setBalance] = useState(1000);

    const items = [
        { id: 0, name: "Antlers", price: 100 },
        { id: 1, name: "Sweater", price: 200 },
        { id: 2, name: "Fire", price: 500 }
    ];

    const handlePurchase = (item) => {
        if (balance >= item.price) {
            setBalance(balance - item.price);
            alert(`You bought the ${item.name}!`);

        } else {
            alert("Not enough balance to purchase this item!");
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', height: '100vh' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '200px', backgroundColor: 'lightblue', alignItems: 'center' }}>
                <h1>SHOP</h1>
                <p>Balance: ${balance}</p>

                <div style={{ display: "flex", flexDirection: 'column', gap: "15px" }}>
                    {items.map((item) => (
                        <div key={item.id} style={{
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            padding: "10px",
                            width: "150px",
                            textAlign: "center",
                            backgroundColor: "#fff",
                        }}>
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <button
                                onClick={() => handlePurchase(item)}
                                style={{
                                    padding: "8px 12px",
                                    backgroundColor: "green",
                                    color: "#fff",
                                }}>
                                Buy
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Shop;