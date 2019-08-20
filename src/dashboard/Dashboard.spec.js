import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />);

        expect(tree.toJSON()).toMatchSnapshot();
    });
    it('displays default values of Unlocked and Open', () => {
        const {getByText} = render(<Dashboard />)

        expect(getByText(/open/i)).toBeTruthy();
        expect(getByText(/unlocked/i)).toBeTruthy();
    })
});