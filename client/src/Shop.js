import { useState, useEffect } from "react";

const Shop = ({ nuggets: balance, setNuggets: setBalance, charInfo, setCharInfo }) => {

    const [items, setItems] = useState(() => {
        const savedItems = localStorage.getItem('items');
        return savedItems ? JSON.parse(savedItems) : [
            { id: 0, name: "Antlers", price: 100, purchased: false },
            { id: 1, name: "Sweater", price: 200, purchased: false },
            { id: 2, name: "Fire", price: 500, purchased: false }
        ];
    });

    const [localBalance, setLocalBalance] = useState(() => {
        const savedBalance = localStorage.getItem('balance');
        return savedBalance ? JSON.parse(savedBalance) : balance;
    });

    useEffect(() => {
        localStorage.setItem('balance', JSON.stringify(localBalance));
    }, [localBalance]);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    const handlePurchase = (item) => {
        if (balance >= item.price) {
            const newBalance = balance - item.price;
            setLocalBalance(newBalance);
            localStorage.setItem('balance', JSON.stringify(newBalance));
            alert(`You bought the ${item.name}!`);
            setItems((prevItems) =>
                prevItems.map((currentItem) =>
                    currentItem.id === item.id
                        ? { ...currentItem, purchased: true }
                        : currentItem
                )
            );
        } else {
            alert("Not enough balance to purchase this item!");
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', height: '100vh' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '200px', backgroundColor: 'lightblue', alignItems: 'center' }}>
                <h1>SHOP</h1>
                <p>Balance: ${localBalance}</p>

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
                                disabled={item.purchased}
                                style={{
                                    padding: "8px 12px",
                                    backgroundColor: item.purchased ? "grey" : "green",
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