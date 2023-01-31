import React, { useState, useEffect } from 'react';
import axios from 'axios';


export async function Card(){
        const response = await axios.get('http://deckofcardsapi.com/api/deck/new/draw/?count=1')
    return (
        <div> carta</div>
    )
};