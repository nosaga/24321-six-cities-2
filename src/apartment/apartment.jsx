import React from 'react';
import PropTypes from 'prop-types';

const Apartment = (props) => {
  const {cardTitle, onClick} = props;
  return (
    <article className="cities__place-card place-card">
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;120</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={onClick}>
          <a href="#">{cardTitle}</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
};

Apartment.propTypes = {
  cardTitle: PropTypes.oneOf([`Beautiful &amp; luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`]),
  onClick: PropTypes.func
};

export default Apartment;
