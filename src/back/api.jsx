import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const Embaralhar  = async () => {
    try{
        const response = await axios.get('http://deckofcardsapi.com/api/deck/new/draw/?count=1')
    } catch (error){
        console.log(error)
    }

     
};
