import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';
import Controls from '../controls/Controls';
import Display from '../display/Display';

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
    it('successfully renders the controls and display', () => {
       render(<Display />); 
       render(<Controls />)
    })
    // it('gate cannot be closed or opened if it is locked', () => {

    // })
});