import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// add enzyme adapter to test suite
configure({ adapter: new Adapter() });
