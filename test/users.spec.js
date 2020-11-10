const { findUserByEmail, findUserById } = require('../users');

describe('The findUserByEmail function', () => {
    it('find a user by email', done => {
        findUserByEmail('bahdcoder@gmail.com')
            .then(res => {
                expect(res.message).toEqual('User found successfully.');

                done();
            });
    });

    it('find a user by email(Using the return promise method', () => {
        return findUserByEmail('bahdcoder@gmail.com')
            .then(res => {
                expect(res.message).toEqual('User found successfully.');
            });
    });

    it('find a user by email(Using async/await', async () => {
        const res = await findUserByEmail('bahdcoder@gmail.com');
        expect(res.message).toEqual('User found successfully.');
    });

    it('rejects with error if user with email was not found.', () => {
        const actual = findUserByEmail('user@example.com');

        expect(actual).rejects.toEqual(new Error('User with email: user@example.com was not found.'));
    });
});

describe('The findUserById function', () => {
    it('should find a user by id', done => {
        findUserById(1)
            .then(res => {
                expect(res.message).toEqual('User found successfully.');

                done();
            });
    });

    it('should find a user by id(Using the return promise method', () => {
        return findUserById(1)
            .then(res => {
                expect(res.message).toEqual('User found successfully.');
            });
    });

    it('should find a user by id(Using async/await', async () => {
        const res = await findUserById(1);
        expect(res.message).toEqual('User found successfully.');
    });

    it('should reject if user is not found by id', () => {
        const actual = findUserById(99);

        expect(actual).rejects.toEqual('User with id: 99 was not found.');
    });
});