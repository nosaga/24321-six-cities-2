import React from 'react';
import renderer from 'react-test-renderer';
import Apartment from '../apartment/apartment';

it(`apartment block renders when app is launched`, () => {
  const tree = renderer
    .create(<Apartment
      card={[`Wood and stone place`]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
