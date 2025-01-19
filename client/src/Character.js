import { useState } from 'react';
import characterSprite from './sprites/base.png';
import clothingSprite1 from './sprites/1.png';
import clothingSprite2 from './sprites/2.png';
import clothingSprite3 from './sprites/3.png';

const Character = ({ charInfo, setCharInfo }) => { 
    
    return ( 
        <div className="character">
            <img className="character-image" src={characterSprite}/>
            {charInfo["sweater"] == "true" && <img className="character-image" src={clothingSprite1} />}
            {charInfo["flame"] == "true" && <img className="character-image" src={clothingSprite2} />}
            {charInfo["horns"] == "true" && <img className="character-image" src={clothingSprite3} />}
        </div>
    );
}
 
export default Character;