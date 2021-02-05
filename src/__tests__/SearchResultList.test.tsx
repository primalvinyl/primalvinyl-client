import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import rootReducer from '../store/reducers';
import SearchResultList from '../components/SearchResultList';

describe('SearchResultList', () => {
    const store = createStore(rootReducer, {});
    const searchList = [1, 2, 3];

    it('renders', () => {
        const myWrapper = shallow(
            <Provider store={store}>
                <MemoryRouter>
                    <SearchResultList list={searchList} />
                </MemoryRouter>
            </Provider>
        );
        expect(myWrapper.exists());
    });
    
    it('matches snapshot', () => {
        const component = Renderer.create(
            <Provider store={store}>
                <MemoryRouter>
                    <SearchResultList list={searchList} />
                </MemoryRouter>
            </Provider>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
