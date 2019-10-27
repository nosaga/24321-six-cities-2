import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app/app';


it(`expect App to render at launch`, () => {
  const tree = renderer
    .create(<App
      title={[`Beautiful &amp; luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
