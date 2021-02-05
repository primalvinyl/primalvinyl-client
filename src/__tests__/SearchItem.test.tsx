import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import rootReducer from '../store/reducers';
import SearchItem from '../components/SearchItem';
import { songResultDefault } from '../store/types';

describe('SearchItem', () => {
    const store = createStore(rootReducer, {});
    const searchItem = songResultDefault;

    it('renders', () => {
        const myWrapper = shallow(
            <Provider store={store}>
                <MemoryRouter>
                    <SearchItem item={searchItem} />
                </MemoryRouter>
            </Provider>
        );
        expect(myWrapper.exists());
    });
    
    it('matches snapshot', () => {
        const component = Renderer.create(
            <Provider store={store}>
                <MemoryRouter>
                    <SearchItem item={searchItem} />
                </MemoryRouter>
            </Provider>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
