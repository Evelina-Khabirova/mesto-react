function InputProfile() {
  return(
    <div>
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
        />
        <span className="popup__error" id="about-me-input-error">Нет текста</span>
      </div>
    </div>
  );
}

export default InputProfile;