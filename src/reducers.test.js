import { user } from './reducers';
import { putUser, userDefault } from './actions';

describe('user', () => {
    it('should return the initial state', () => {
        const actualResult = user(undefined, putUser());
        expect(actualResult).toEqual(userDefault);
    })
    it('should put a new user', () => {
        const actualResult = user(undefined, putUser(userDefault));
        expect(actualResult).toEqual(userDefault);
    });
});
