import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Display from './Display';

describe('<Display />', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Display />);

        expect(tree.toJSON()).toMatchSnapshot();
    });
    // it('displays if gate is open/closed')

    // it('displays if gate is locked/unlocked', () => {
    //     const closed = jest.fn();
        
    //     const {}
    // })

    // it('displays Closed if closed prop is True', () => {
    //     const {getByText} = render(<Display locked={true} closed={true}/>)
    // })

    //it('displays Open if closed prop is False')

    // it('displays Locked if the locked prop is True')

    // it ('displays Unlocked if the locked prop is False')

    it('uses the red-led class when locked or closed', () => {
        const {getByText} = render(<Display locked={true} closed={true}/>)
        const closed = getByText(/closed/i);
        const locked = getByText(/locked/i);

        expect(closed.className).toBe('led red-led');
        expect(locked.className).toBe('led red-led');
    })

    it('uses the green-led class when unlocked or open', () => {
        const {getByText} = render(<Display locked={false} closed={false}/>)
        const open = getByText(/open/i);
        const unlocked = getByText(/unlocked/i);

        expect(open.className).toBe('led green-led');
        expect(unlocked.className).toBe('led green-led');
    })
})


