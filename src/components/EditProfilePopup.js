import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.js';

function EditProfilePopup({
  isOpen,
  onClose,
  onUpdateUser
}){
  const curreantUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [about, setAbout] = React.useState('');
  

  React.useEffect(() => {
    if(curreantUser) {
      setName(curreantUser.name);
      setAbout(curreantUser.about);
    }
  }, [curreantUser]);
  
  function handleChangeName(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleChangeAbout(e) {
    e.preventDefault();
    setAbout(e.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: about,
    });
  }

  return(
    <PopupWithForm 
      open={`${isOpen ? 'popup__active' : ''}`}
      close={onClose}
      title="Редактировать профиль"
      name="profile"
      button="Сохранить"
      onSubmit={handleSubmit}
    >
      <div>
        <input 
          required
          minLength="2"
          maxLength="40"
          name="fullname" 
          type="text" 
          id="name-input"
          placeholder="ФИО" 
          className="popup__input popup__input_type_fullname"
          value={name}
          onChange={handleChangeName}
        />
        <span className="popup__error" id="name-input-error">Нет текста</span>
      </div>
      <div>
        <input 
          required
          minLength="2"
          maxLength="200"
          name="about_me" 
          type="text" 
          id="about-me-input"
          placeholder="О себе" 
          className="popup__input popup__input_type_about-me"
          value={about}
          onChange={handleChangeAbout}
        />
        <span className="popup__error" id="about-me-input-error">Нет текста</span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;