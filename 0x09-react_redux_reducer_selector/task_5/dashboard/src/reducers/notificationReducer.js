import { Map, setIn } from 'immutable';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = {
  notifications: Map([]),
  filter: 'DEFAULT',
};
export const notificationReducer = (state = Map(initialState), action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const listNotificationsAsObject = notificationsNormalizer(
        action.notifications
      );
      Object.keys(listNotificationsAsObject).map(
        (notificationId) =>
          (listNotificationsAsObject[notificationId]['isRead'] = false)
      );
      return state.set(
        'notifications',
        state.get('notifications').merge(listNotificationsAsObject)
      );
    case MARK_AS_READ:
      return setIn(
        state,
        ['notifications', String(action.index), 'isRead'],
        true
      );

    case SET_TYPE_FILTER:
      const { filter } = action;
      return state.set('filter', filter);

    default:
      return initialState;
  }
};
