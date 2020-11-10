

describe('Test using matchers', () => {
    it('should add 2 + 2 to equal 4', () => {
        expect(2 + 2).toBe(4);
    });

    it('object assignment', () => {
        const data = { one: 1 };
        data['two'] = 2;

        expect(data).toEqual({ one: 1, two: 2 });
    });

    it('adding positive numbers is not zero', () => {
        for (let a = 1; a < 10; a++) {
            for (let b = 1; b < 10; b++) {
                expect(a + b).not.toBe(0);
            }
        }
    });

    it('null', () => {
        const n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
    });

    it('zero', () => {
        const z = 0;
        expect(z).toBeDefined();
        expect(z).toBeFalsy();
        expect(z).not.toBeUndefined();
        expect(z).not.toBeNull();
        expect(z).not.toBeTruthy();
    });

    it('two plus two', () => {
        const value = 2 + 2;

        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(3.5);
        expect(value).toBeLessThan(5);
        expect(value).toBeLessThanOrEqual(4.5);
        expect(value).toBe(4);
        expect(value).toEqual(4);
    });

    it('should add floating point numbers', () => {
        const value = 0.1 + 0.2;

        expect(value).toBeCloseTo(0.3);
    });

    it('there is no I in team', () => {
        expect('team').not.toMatch(/I/);
    });

    it('but there is a "stop" in Christoph', () => {
        expect('stop').toMatch(/stop/);
    });

    it('the shopping list has beer on it', () => {
        const shoppingList = [
            'diapers',
            'kleenex',
            'trash bags',
            'paper towels',
            'beer'
        ];

        expect(shoppingList).toContain('beer');
        expect(new Set(shoppingList)).toContain('beer');
        expect(shoppingList).not.toContain('chicken');
    });

    it('compiling android goes as expected', () => {
        function compileAndroidCode() {
            throw new Error('you are using the wrong JDK');
        };

        expect(compileAndroidCode).toThrow();
        expect(compileAndroidCode).toThrow(Error);

        expect(compileAndroidCode).toThrow('you are using the wrong JDK');
        expect(compileAndroidCode).toThrow(/JDK/);
    });

    it('the data is peanut butter', done => {
        function callback(data) {
            try {
                expect(data).toBe('peanut butter');
                done();
            } catch (err) {
                done(err);
            }
        };

        callback('peanut butter');
    });
});