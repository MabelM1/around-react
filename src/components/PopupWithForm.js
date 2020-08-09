import React from "react";

function PopupWithForm(props) {
  return (
    <div>
      <aside className={`popup popup_type_${props.name}`}>
        <div className="popup__container">
          <form className="popup__form">
            <h2 className="popup__title">{props.title}</h2>
            <input
              className="popup__input popup__name"
              type="text"
              name="title"
              placeholder="Title"
              minLength="1"
              maxLength="30"
              required
            />
            <span
              id="popup__title-error"
              className="popup__input_type_error"
            ></span>
            <input
              className="popup__input popup__about"
              type="url"
              name="link"
              placeholder="Image link"
              pattern="https?://.+"
              required
            />
            <span
              id="popup__link-error"
              className="popup__input_type_error"
            ></span>
            <button className="popup__button popup__button_disabled">
              Create
            </button>
            <button className="popup__exit"></button>
          </form>
        </div>
      </aside>
      <aside className="popup popup_type_edit">
        <div className="popup__container">
          <form className="popup__form">
            <h2 className="popup__title">Edit profile</h2>
            <input
              className="popup__input popup__name"
              type="text"
              placeholder="Name"
              name="name"
              minLength="2"
              maxLength="40"
              required
              pattern="[A-Za-z -]{2,}"
            />
            <span
              id="popup__name-error"
              className="popup__input_type_error"
            ></span>
            <input
              className="popup__input popup__about"
              type="text"
              name="job"
              placeholder="About Me"
              minLength="2"
              maxLength="200"
              required
            />
            <span
              id="popup__job-error"
              className="popup__input_type_error"
            ></span>
            <button className="popup__button" type="submit">
              Save
            </button>
            <button className="popup__exit"></button>
          </form>
        </div>
      </aside>

      <aside className="popup popup_type_confirm">
        <div className="popup__container">
          <form className="popup__form">
            <h2 className="popup__title">Are you sure?</h2>
            <button className="popup__button">Yes</button>
            <button className="popup__exit"></button>
          </form>
        </div>
      </aside>
      <aside className="popup popup_type_profile-picture">
        <div className="popup__container">
          <form className="popup__form">
            <h2 className="popup__title">Change profile picture</h2>
            <input
              className="popup__input popup__photo"
              type="url"
              placeholder="Image link"
              name="photo"
              required
              pattern="https?://.+"
            />
            <span
              id="popup__photo-error"
              className="popup__input_type_error"
            ></span>
            <button className="popup__button">Save</button>
            <button className="popup__exit"></button>
          </form>
        </div>
      </aside>
    </div>
  );
}

export default PopupWithForm;