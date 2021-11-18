import { render, fireEvent } from "@testing-library/react";

import Button from "./button";

it('check button', () => {
    const { queryByTitle } = render(<Button />)
    const btn = queryByTitle('dummy')
    expect(btn).toBeTruthy()
})
describe('click button', () => {
    it('onclick', () => {
        const { queryByTitle } = render(<Button />)
        const btn = queryByTitle('dummy')
        expect(btn.innerHTML).toBe('click me')
        fireEvent.click(btn)
        expect(btn.innerHTML).toBe('clicked')
    })
})