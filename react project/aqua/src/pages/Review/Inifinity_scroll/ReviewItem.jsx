import React from "react";
import '../../Review/review.css';

const arrayList = ["Отлично", "Хорошо", "Нормально", "Плохо", "Ужасно"];

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

export default function Review_item({name, email, body}) {
    return(
        <>
            <div id="review text" className="review">
                <h3>{name}</h3>
                <h4>{email}</h4>
                <p>{getRandomElement(arrayList)}</p>
                <p>{body}</p>
            </div>
        </>
    )
}