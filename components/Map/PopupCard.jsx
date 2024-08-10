import React from "react";
import './Card.css';

function PopupCard() {
    return (
        <div className="card">
            <img
                src="https://uiverse.io/build/_assets/astronaut-WTFWARES.png"
                alt=""
                className="image"
            />
            <div className="heading">Congratzz you Unlocked MOON BOUNTY!
            Tweet it ASAP</div>
        </div>

    )
}

export default PopupCard;