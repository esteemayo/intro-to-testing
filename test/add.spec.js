const add = require('../add');

// const actual = add(1, 3);
// const expected = 4;

// Basic assertion
// if (actual === expected) {
//     console.log('Test pass.');
// } else {
//     throw new Error('Add function does not work properly.');
// }

// assert.equal(result, expected, 'Add function does not work properly 🔥');

describe('The add function', () => {
    it('adds two numbers', () => {
        const actual = add(1, 3);
        const expected = 4;

        expect(actual).toBe(expected);
    });
});