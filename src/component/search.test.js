import { render, fireEvent } from "@testing-library/react";

import Search from './search'

it('check button', () => {
    const { queryByTitle } = render(<Search />)
    const input = queryByTitle('search')
    expect(input).toBeTruthy()
})

describe('change input', () => {
    it('onchange', () => {
        const { queryByTitle } = render(<Search />)
        const input = queryByTitle('search')
        fireEvent.change(input,{target:{value:'letsgo'}})
        expect(input.value).toBe('letsgo')
    })
})