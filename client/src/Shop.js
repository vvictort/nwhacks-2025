import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import ShopItem from "./ShopItem";
import nuggetImage from './sprites/nugget.png';
import "./Shop.css";

const Shop = ({ nuggets, setNuggets, charInfo, setCharInfo }) => {

    const [items, setItems] = useLocalStorage("items", []);
    const [balance, setBalance] = useLocalStorage("balance", nuggets)
    const today = new Date();
    const date = today.getDate();

    useEffect(() => {
        // onload set localstorage data
        if (items.length <= 0) {
            setItems([
                { id: 0, name: "Antlers", price: 100, purchased: false },
                { id: 1, name: "Sweater", price: 200, purchased: false },
                { id: 2, name: "Fire", price: 500, purchased: false }
            ])
        }

        if (balance == null) {
            setBalance(10000);
        }
    }, []);


    // useEffect(() => {
    //     setBalance('balance', JSON.stringify(balance));
    // }, [balance]);

    // useEffect(() => {
    //     setItems('items', items);
    // }, [items]);

    // const updateNumNuggets = () => {
    //     setLocalBalance(nuggets);
    // }

    const handlePurchase = (item) => {
        if (balance >= item.price) {
            const newBalance = balance - item.price;
            setBalance(newBalance);
            // setBalance('balance', JSON.stringify(newBalance));
            alert(`Slyther is now equipped with the ${item.name}!`);
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
        <div className="shop">
            {/* {date == 18 && updateNumNuggets} */}
            <h2 className="shop-header">SHOP</h2>
            <span className="balance-container">
                <p className="shop-balance">Balance: </p>
                <img className="nugget-icon" src={nuggetImage} alt="nugget"></img>
                <p className="shop-balance">{balance}</p>
            </span>
            <div className="shop-items">
                {items.map((item) => (
                    <ShopItem item={item} handlePurchase={handlePurchase}></ShopItem>
                ))}
            </div>
        </div >
    );
}

export default Shop;