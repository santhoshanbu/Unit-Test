import {multiply,madelower} from './assist'

test('makelower',()=>{
    expect(madelower('LEET')).toBe('leet')
})

test('multiply',()=>{
    expect(multiply(2,2)).toBe(4)
})