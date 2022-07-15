import React, { useEffect } from 'react';
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
  const isOpen = isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || isSelectedCard;

  function handleEscUp(evt) {
    if(evt.key === 'Escape') {
      closeAllPopups();
    }
  }

  useEffect(() => {
    function closeByEscape(evt) {
      if(evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    if(isOpen) {
      document.addEventListener('keyup', handleEscUp);
      return() => {
        document.removeEventListener('keyup', handleEscUp);
      }
    }
  }, [isOpen]);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setIsSelectedCard(true);
    setSelectedCard(card);
  }

  function handleTrashClick() {
    setIsDeleteCard(true);
  }

  function closeAllPopups() {
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
        close={closeAllPopups}
        title="Обновить аватар"
        name="avatar"
        button="Сохранить"
      >
        <InputAvatar />
      </PopupWithForm>
      <PopupWithForm 
        open={`${isEditProfilePopupOpen ? 'popup__active' : ''}`}
        close={closeAllPopups}
        title="Редактировать профиль"
        name="profile"
        button="Сохранить"
      >
        <InputProfile />
      </PopupWithForm>
      <PopupWithForm 
        open={`${isAddPlacePopupOpen ? 'popup__active' : ''}`}
        close={closeAllPopups}
        title="Новое место"
        name="card"
        button="Создать"
      >
        <InputAddCard />
      </PopupWithForm>
      <ImagePopup 
        open={`${isSelectedCard ? 'popup__active' : ''}`}
        card={selectedCard}
        close={closeAllPopups}
      />
      <PopupWithForm 
        open={`${isDeleteCard ? 'popup__active' : ''}`}
        close={closeAllPopups}
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
