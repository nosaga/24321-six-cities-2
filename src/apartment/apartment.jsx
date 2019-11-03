import React from 'react';
import PropTypes from 'prop-types';

const Apartment = (props) => {
  const {card, handleActiveOnHover} = props;

  return (
    <article className="cities__place-card place-card" onMouseEnter={handleActiveOnHover}>
      <div className="place-card__mark">
        <span>{card.status}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={card.photo} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{card.price}</b>
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
        <h2 className="place-card__name">
          <a href="#">{card.title}</a>
        </h2>
        <p className="place-card__type">{card.type}</p>
      </div>
    </article>
  );
};

Apartment.propTypes = {
  card: PropTypes.array.isRequired,
  handleActiveOnHover: PropTypes.func.isRequired
};

export default Apartment;
