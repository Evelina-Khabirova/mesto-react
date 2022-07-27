import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup({
  isOpen,
  onClose,
  onAddPlace
}){

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  React.useEffect(() => {
    if(!isOpen) {
      setName();
      setLink();
    }
  }, [isOpen, setName, setLink])

  function handleChangeName(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    e.preventDefault();
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: name,
      link: link,
    });
  }

  return(
    <PopupWithForm 
      open={`${isOpen ? 'popup__active' : ''}`}
      close={onClose}
      title="Новое место"
      name="card"
      button="Создать"
      onSubmit={handleSubmit}
    >
      <div>
        <input 
          required
          minLength="2"
          maxLength="30"
          name="name" 
          type="text" 
          id="card-name-input"
          placeholder="Название" 
          className="popup__input popup__input_type_card-name"
          value={name || ''}
          onChange={handleChangeName}
        />
        <span className="popup__error" id="card-name-input-error">Нет текста</span>
      </div>
      <div>
        <input 
          required
          name="link" 
          type="url" 
          id="card-link-input"
          placeholder="Ссылка на картинку" 
          className="popup__input popup__input_type_card-link"
          value={link || ''}
          onChange={handleChangeLink}
        />
        <span className="popup__error" id="card-link-input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;