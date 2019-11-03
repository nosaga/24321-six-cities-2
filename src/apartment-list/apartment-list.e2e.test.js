import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ApartmentList from '../apartment-list/apartment-list';

Enzyme.configure({adapter: new Adapter()});

it(`sets hoveredOver state to true/fase from mouseenter and mouseleave events`, () => {
  const app = shallow(<ApartmentList
    card={[`Beautiful &amp; luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`]}
  />);

  const hoveredCard = app.find(`.cities__place-card`);
  hoveredCard.simulate(`mouseenter`);

  expect(hoveredCard.state(`hoveredOver`)).toBe(true);
});
