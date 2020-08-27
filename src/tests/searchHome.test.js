import React from 'react';
import renderer from 'react-test-renderer';
import SearchHome from '../components/searchHome';

test('SearchHome snapShot', () => {
  const snap = renderer.create(
    <SearchHome />
  ).toJSON();
  expect(snap).toMatchSnapshot();
});