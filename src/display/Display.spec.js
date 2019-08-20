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
    //     const display = render(<Display />)

        
    // })

    it('displays Closed if closed prop is True', () => {
        const {getByText} = render(<Display locked={true} closed={true}/>)

        expect(getByText(/closed/i)).toBeTruthy();
    })

    it('displays Open if closed prop is False', () => {
        const {getByText} = render(<Display locked={false} closed={false}/>)

        expect(getByText(/open/i)).toBeTruthy();
    })

    it('displays Locked if the locked prop is True', () => {
        const {getByText} = render(<Display locked={true} closed={true}/>)

        expect(getByText(/locked/i)).toBeTruthy();
    })

    it ('displays Unlocked if the locked prop is False', () => {
        const {getByText} = render(<Display locked={false} closed={true}/>)

        expect(getByText(/unlocked/i)).toBeTruthy();
    })

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


