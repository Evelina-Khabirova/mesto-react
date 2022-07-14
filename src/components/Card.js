import React from 'react';

function Card({
  card,
  cardKey,
  userKey,
  onCardClick,
  onTrashClick
}) {

  function handleClick() {
    onCardClick(card);
  }

  function addTrashButton() {
    if(cardKey === userKey) {
      return(
        <div>
        <button 
          type="button" 
          className="cards__trash"
          onClick={onTrashClick}
        ></button>
        </div>
      );
    }
  }

  return(
    <li className="cards__item">
      <img  
        src={card.link} 
        alt={card.name} 
        className="cards__image" 
        onClick={handleClick}
      />
      {addTrashButton()}
      <div className="cards__info">
        <h2 className="cards__title">{card.name}</h2>
        <div className="cards__like-box">
          <button type="button" className="cards__like-button"></button>
          <p className="cards__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;