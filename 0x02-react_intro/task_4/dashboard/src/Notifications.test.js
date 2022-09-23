import { shallow } from 'enzyme';
import Notifications from './Notifications';

const wrapper = shallow(<Notifications />);

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    expect(wrapper.exists());
  });
  it('renders a list with three items', () => {
    expect(wrapper.find("ul")).to.have.lengthOf(1);
    expect(wrapper.find("li")).to.have.lengthOf(3);
  });
  it('renders description text', () => {
    expect(wrapper.find('p').first().text()).to.equal('Here is the list of notifications');
  });
  it('has a close button', () => {
    expect(wrapper.find('img')).to.have.lengthOf(1);
  });
});
