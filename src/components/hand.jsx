import React, { useState, useEffect } from 'react';
import axios from 'axios'

export const Hand = () => {
    const [Cards, setCards] = useState({});
    const getCard = async () => {
        try {
            axios.get('http://deckofcardsapi.com/api/deck/new/draw/?count=3')
            //axios.get('https://randomuser.me/api/?results=3')
            .then((response) => setCards(response.data.cards ?? response.data.results ))
            console.log(Cards, typeof(Cards))

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCard()
    }, []);

    return (
        <div className="container">
            <button onClick={getCard}>Embaralhar</button>

            
        </div>


    )
};
