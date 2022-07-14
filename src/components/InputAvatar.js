import React from 'react';

function InputAvatar() {
  return(
    <div>
      <input 
        required
        name="linkAvatar" 
        type="url" 
        id="profile-avatar-input"
        placeholder="Ссылка на картинку" 
        className="popup__input popup__input_type_profile-avatar-link"
      />
      <span className="popup__error" id="profile-avatar-input-error"></span>
      </div>
  );
}

export default InputAvatar;