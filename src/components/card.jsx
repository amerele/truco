import React, { useState, useEffect } from 'react';

export const Card = ({image = 'a'}) => {
    return(
            <div className="card">
                <img src={image}></img>
            </div>
    )
};
