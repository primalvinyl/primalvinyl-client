import { applyMiddleware, createStore, StoreCreator } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const bindMiddleware = (middleware: SagaMiddleware[]): StoreCreator => {
    if (process.env.NODE_ENV === 'production') return applyMiddleware(...middleware);
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
sagaMiddleware.run(rootSaga);
export default store;
