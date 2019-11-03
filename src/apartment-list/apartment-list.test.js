import React from 'react';
import renderer from 'react-test-renderer';
import ApartmentList from '../apartment-list/apartment-list';


it(`expect ApartmentList to render at launch`, () => {
  const tree = renderer
    .create(<ApartmentList
      cards={[``]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
