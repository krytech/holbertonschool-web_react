import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

let wrapper;
const listNotifications = [
  {
    id: 1,
    type: 'default',
    value: 'New course available',
  },
  {
    id: 2,
    type: 'urgent',
    value: 'New course available',
  },
  {
    id: 3,
    type: 'urgent',
    html: { __html: getLatestNotification() },
  },
];

describe('<Notifications/> render', () => {
  beforeEach(()=>{
    wrapper = shallow(<Notifications />);
  })
  it('test that Notifications renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('verify that Notifications renders three list items', () => {
    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const liElements = wrapper.find(NotificationItem);
    expect(liElements.length).toEqual(3);
  });
  it('verify that Notifications renders the text Here is the list of notifications', () => {
    wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });
  it('check that the menu item is being displayed when displayDrawer is false',()=>{
    expect(
      wrapper.containsMatchingElement(
        <div className="menuItem">Your notifications</div>
      )
    ).toBe(true);
  });
  it(
    'check that the div.Notifications is not being displayed when displayDrawer is false',()=>{
      expect(wrapper.find('div.Notifications').length).toBe(0);
    }
  );
});

describe('Test Notification component with the listNotifications prop',()=>{
  it(
    'renders correctly if you pass an empty array or if you don’t pass the listNotifications property',()=>{
      const wrapper = shallow(<Notifications/>);
      expect(wrapper.exists()).toBe(true)
    }
  );
  it(
    'when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem',()=>{
      const wrapper = shallow(
        <Notifications
          displayDrawer={true}
          listNotifications={listNotifications}
        />
      );
      const liItems = wrapper.find(NotificationItem);
      expect(liItems.length).toBe(3)
    }
  );
  it('when listNotifications is empty the message Here is the list of notifications is not displayed but No new notification for now is', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(
      false
    );
    expect(wrapper.contains(<p>No new notification for now</p>)).toBe(true);

  });
  });
