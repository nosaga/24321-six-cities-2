import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Apartment from "../apartment/apartment.jsx";

class ApartmentList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
    this.handleActiveOnHover = this.handleActiveOnHover.bind(this);
  }

  handleActiveOnHover() {
    this.setState((state) => ({
      isActive: !state.isActive
    }));
  }

  render() {
    const {cards} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {cards.map((card, index) =>
          <Apartment card={card} key={index} handleActiveOnHover={this.handleActiveOnHover}/>
        )}
      </div>
    );
  }
}

ApartmentList.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default ApartmentList;
