import { useState, useEffect } from 'react';
import characterSprite from './sprites/base.png';
import clothingSprite1 from './sprites/1.png';
import clothingSprite2 from './sprites/2.png';
import clothingSprite3 from './sprites/3.png';

import useLocalStorage from "use-local-storage";



const Character = () => {
    const [items, setItems] = useLocalStorage("items", []);
    const [charInfo, setCharInfo] = useLocalStorage("charInfo", {});

    useEffect(() => {
        // onload set localstorage data
        setCharInfo({
            
            Fire: false,
            Sweater: false,
            Antlers: false,
        })
    }, []);

    useEffect(() => {
        localStorage.setItem('charInfo', JSON.stringify(charInfo));
    }, [charInfo]);

    useEffect(() => {
        items.forEach((item) => {
            if (item?.purchased) {
                setCharInfo({...charInfo, [item?.name]: true})
            }
        });
    }, [items]);

    return (
        <div className="character" style={{ zIndex: "3", position: 'absolute', left: '48em'}}>
            <img className="character-image" src={characterSprite} />
            {charInfo.Antlers && <img className="character-image" src={clothingSprite3} />}
            {charInfo.Sweater && <img className="character-image" src={clothingSprite1} />}
            {charInfo.Fire && <img className="character-image" src={clothingSprite2} />}
        </div>
    );
}

export default Character;