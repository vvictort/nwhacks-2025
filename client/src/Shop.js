import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import ShopItem from "./components/ShopItem";

const Shop = ({ nuggets: balance, setNuggets: setBalance, charInfo, setCharInfo }) => {

    const [items, setItems] = useLocalStorage("items", []);


    useEffect(() => {
        // onload set localstorage data
        if (items.length <= 0) {
            setItems([
                { id: 0, name: "Antlers", price: 100, purchased: false },
                { id: 1, name: "Sweater", price: 200, purchased: false },
                { id: 2, name: "Fire", price: 500, purchased: false }
            ])
        }
    }, []);

    const [localBalance, setLocalBalance] = useState(() => {
        const savedBalance = localStorage.getItem('balance');
        return savedBalance ? JSON.parse(savedBalance) : balance;
    });

    useEffect(() => {
        localStorage.setItem('balance', JSON.stringify(localBalance));
    }, [localBalance]);

    // useEffect(() => {
    //     setItems('items', items);
    // }, [items]);

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
                <p>Balance: ${localBalance} nuggets</p>

                <div style={{ display: "flex", flexDirection: 'column', gap: "15px" }}>
                    {items.map((item) => (
                        <ShopItem item={item} handlePurchase={handlePurchase}></ShopItem>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Shop;