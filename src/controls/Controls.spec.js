import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

describe('<Controls />', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Controls />);

        expect(tree.toJSON()).toMatchSnapshot();
    });
    // it('has a button that toggles the closed state', () => {
    //     let toggled = false
    //     const toggleClosed = jest.fn();

    //     const {getByText} = render(<Controls toggleClosed={toggleClosed} />)

    //     fireEvent.click(getByText(/toggleClosed/i));

    //     expect(toggleClosed).toHaveBeenCalled();
    // })

    // it('has a button that toggles the locked state')

    // it('closed toggle button is disabled if the gate is locked')

    // it('locked toggle button is disabled if the gate is open')

    // it('buttons text changes to reflect the state the door will be in if clicked')
})