// set node_env to test
process.env.NODE_ENV = 'test';

// mock fetches
global.fetch = jest.mock('node-fetch');
