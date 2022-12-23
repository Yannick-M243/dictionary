import React from 'react';
import Dictionary from '../components/Dictionary.js';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer
        .create(<Dictionary/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});