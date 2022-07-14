function InputAddCard() {
  return(
    <div>
      <div>
        <input 
          required
          minlength="2"
          maxlength="30"
          name="name" 
          type="text" 
          id="card-name-input"
          placeholder="Название" 
          className="popup__input popup__input_type_card-name"
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
        />
        <span className="popup__error" id="card-link-input-error"></span>
        </div>
  </div>
  );
}

export default InputAddCard;