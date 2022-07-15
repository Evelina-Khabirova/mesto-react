import React from 'react';
import Api from '../utils/Api.js';
import Card from './Card.js';

function Main({
  openEditAvatar,
  openEditProfile,
  openAddCard,
  onCardClick,
  onTrashClick
}) {

  const [userAvatar, setUserAvatar] = React.useState('');
  const [userProfile, setUserProfile] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userId, setUserId] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    const api = new Api('https://mesto.nomoreparties.co/v1/cohort-43');
    api.identificationProfile()
    .then((res) => {
      setUserAvatar(res.avatar);
      setUserProfile(res.name);
      setUserDescription(res.about);
      setUserId(res._id);
    })
    .catch((err) => console.log(err))

    api.getInitialCards()
    .then((res) => {
      setCards(res);
    })
    .catch((err) => console.log(err));
  }, []);

  return(
    <main>
    <section className="profile">
      <div className="profile__edit-image">
        <div 
          className="profile__avatar"
          onClick={openEditAvatar}
          style={ {backgroundImage: `url(${userAvatar})`} }
        ></div>
      </div>
      <div className="profile__profile-info">
        <h1 
          className="profile__fullname">{userProfile}</h1>
        <button 
          type="button" 
          className="profile__edit-button"
          onClick={openEditProfile}
        ></button> 
        <p className="profile__about-me">{userDescription}</p>
      </div>
      <button 
        type="button" 
        className="profile__add-button"
        onClick={openAddCard}
      ></button>
    </section>
    <section className="elements">
      <ul className="cards">
        {cards.map((card) => {
          return(
            <Card
              card={card}
              cardKey={card.owner._id}
              userKey={userId}
              onCardClick={onCardClick}
              onTrashClick={onTrashClick}
              key={card._id}
            />
          );
        })}
      </ul>
    </section>
  </main>
  );
}

export default Main;
