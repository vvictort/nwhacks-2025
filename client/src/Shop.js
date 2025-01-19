import { useState, useEffect } from "react";

const Shop = () => {

    const [balance, setBalance] = useState(() => {
        const savedBalance = localStorage.getItem('balance');
        return savedBalance ? JSON.parse(savedBalance) : 1000;
    });

    const [items, setItems] = useState(() => {
        const savedItems = localStorage.getItem('items');
        return savedItems ? JSON.parse(savedItems) : [
            { id: 0, name: "Antlers", price: 100, purchased: false },
            { id: 1, name: "Sweater", price: 200, purchased: false },
            { id: 2, name: "Fire", price: 500, purchased: false }
        ];
    });

    useEffect(() => {
        localStorage.setItem('balance', JSON.stringify(balance));
    }, [balance]);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    const handlePurchase = (item) => {
        if (balance >= item.price) {
            setBalance(balance - item.price);
            alert(`You bought the ${item.name}!`);
            setCharInfo((prevState) => ({
                ...prevState,
                [item.name]: true,
            }));
            console.log(charInfo);
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
                <p>Balance: {balance} nuggets</p>

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
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Shop;