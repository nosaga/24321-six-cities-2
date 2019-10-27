import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Apartment from '../apartment/apartment';

Enzyme.configure({adapter: new Adapter()});

it(`title is clickable`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<Apartment
    title={[`Beautiful &amp; luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`]}
    onClick={clickHandler}
  />);

  const clickedTitle = app.find(`.place-card__name`);
  clickedTitle.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
