import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import InputAvatar from './InputAvatar.js';
import InputProfile from './InputProfile.js';
import InputAddCard from './InputAddCard.js';
import ImagePopup from './ImagePopup.js';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [isSelectedCard, setIsSelectedCard] = React.useState(false);
  const [isDeleteCard, setIsDeleteCard] = React.useState(false);

  function handleEscUp(evt) {
    if(evt.key === 'Escape') {
      closeAllPopup();
    }
  }

  function handleEditAvatarClick() {
    document.addEventListener('keyup', handleEscUp);
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    document.addEventListener('keyup', handleEscUp);
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    document.addEventListener('keyup', handleEscUp);
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    document.addEventListener('keyup', handleEscUp);
    setIsSelectedCard(true);
    setSelectedCard(card);
  }

  function handleTrashClick() {
    document.addEventListener('keyup', handleEscUp);
    setIsDeleteCard(true);
  }

  function closeAllPopup() {
    document.removeEventListener('keyup', handleEscUp);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsSelectedCard(false);
    setSelectedCard(null);
    setIsDeleteCard(false);
  }

  return (
    <div>
      <Header />
      <Main 
        openEditAvatar = {handleEditAvatarClick}
        openEditProfile = {handleEditProfileClick}
        openAddCard = {handleAddPlaceClick}
        onCardClick = {handleCardClick}
        onTrashClick = {handleTrashClick}
      />
      <PopupWithForm 
        open={`${isEditAvatarPopupOpen ? 'popup__active' : ''}`}
        close={closeAllPopup}
        title="Обновить аватар"
        name="avatar"
        button="Сохранить"
      >
        <InputAvatar />
      </PopupWithForm>
      <PopupWithForm 
        open={`${isEditProfilePopupOpen ? 'popup__active' : ''}`}
        close={closeAllPopup}
        title="Редактировать профиль"
        name="profile"
        button="Сохранить"
      >
        <InputProfile />
      </PopupWithForm>
      <PopupWithForm 
        open={`${isAddPlacePopupOpen ? 'popup__active' : ''}`}
        close={closeAllPopup}
        title="Новое место"
        name="card"
        button="Создать"
      >
        <InputAddCard />
      </PopupWithForm>
      <ImagePopup 
        open={`${isSelectedCard ? 'popup__active' : ''}`}
        card={selectedCard}
        close={closeAllPopup}
      />
      <PopupWithForm 
        open={`${isDeleteCard ? 'popup__active' : ''}`}
        close={closeAllPopup}
        title="Вы уверены?"
        name="deleteCard"
        button="Да"
      >
      </PopupWithForm>
      <Footer />
    </div>
  );
}

export default App;
