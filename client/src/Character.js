import { useState } from 'react';
import characterSprite from './sprites/base.png';
import clothingSprite1 from './sprites/1.png';
import clothingSprite2 from './sprites/2.png';
import clothingSprite3 from './sprites/3.png';

const Character = ({ charInfo }) => { 
    
    return ( 
        <div className="character" style={{zIndex: "-1"}}>
            <img className="character-image" src={characterSprite}/>
            {charInfo["Sweater"] && <img className="character-image" src={clothingSprite1} />}
            {charInfo["Fire"] && <img className="character-image" src={clothingSprite2} />}
            {charInfo["Antlers"] && <img className="character-image" src={clothingSprite3} />}
        </div>
    );
}
 
export default Character;