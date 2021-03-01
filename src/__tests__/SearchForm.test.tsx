import * as React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../store/reducers';
import SearchForm from '../components/SearchForm';

describe('SearchForm', () => {
    const store = createStore(rootReducer, {});

    it('renders', () => {
        const myWrapper = shallow(
            <Provider store={store}>
                <SearchForm searchHandler={() => {}} />
            </Provider>
        );
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(
            <Provider store={store}>
                <SearchForm searchHandler={() => {}} />
            </Provider>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
