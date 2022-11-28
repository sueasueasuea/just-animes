import React, { FC } from 'react'
import './AnimeCard.css'

interface CardProps {
    title: string;
    img: string;
}

const Card: FC<CardProps> = ({ img, title }) => {
    return (
        <div  className='anime-item'>
            <img src={img} />
            <h4>{title}</h4>
        </div>
    )
}

export default Card