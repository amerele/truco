import React, { useState, useEffect } from 'react';
import axios from "axios"
export const Game = () => {
    const [Cards, setCards] = useState([]);
    const [Theme, setTheme] = useState('');
    const getCards = async () => {
        try {
            const response = await axios.get('http://deckofcardsapi.com/api/deck/new/draw/?count=7')
            setCards(response.data.cards)
            //console.log(Cards)
        } catch (error) {
            console.log(error)
        }
        console.log(Cards)
    }
    const changeTheme = (e) => {
        document.querySelector('body').style.backgroundImage = `url(../arenas/${e.target.value}.jpg)`
    }
    return (
        <>
            <button onClick={getCards}>Embaralhar</button>
            <div className="tema">
                <label htmlFor="Theme">Arena:</label>
                <select name="Theme" id="Theme" onChange={changeTheme}>
                    <option value="dallas">Dallas</option>
                    <option value="coreto">Coreto</option>
                    <option value="bar">Bar</option>
                </select>
            </div>

            <div className='deck enemy'>
                {
                    Cards.map((card, index) => (
                        index % 2 == 0 && index != 6 ? (
                            <div className='card flipped-card' key={card.code}></div>
                        ) : ''
                    ))
                }
            </div>
            <div className="card coringa">
                {
                    Cards.map((card, index) => (
                        index == 6 ? (
                            <img src={card.image} key={card.code} className="coringa" />
                        ) : ''
                    ))
                }
            </div>
            <div className='deck mine'>
                {
                    Cards.map((card, index) => (

                        index % 2 == 1 && index != 6 ? (
                            <div className='card' key={card.code}>
                                <img src={card.image}></img>
                            </div>
                        ) : ''
                    ))
                }
            </div>
        </>
    )
};
