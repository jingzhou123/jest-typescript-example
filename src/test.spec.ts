import { Test } from "./abc";

describe('any', () => {
    it('any', () => {
        expect(new Test).toBeInstanceOf(Test)
    })
})