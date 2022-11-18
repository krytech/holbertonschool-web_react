import { css, StyleSheet } from 'aphrodite';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
} from '../actions/uiActionCreators';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import vars from '../utils/styleVars';
import { AppContext, user } from './AppContext';
import { listCourses, listNotifications } from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCtrlKey = this.handleCtrlKey.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.state = {
      user,
      logOut: this.logOut,
      listNotifications,
    };
  }

  /**
   * If the user presses the 'h' key while holding down the 'ctrl' key, log the user out
   * @param event - The event object
   */
  handleCtrlKey(event) {
    if (event.keyCode === 72 && event.ctrlKey) {
      alert('Logging you out');
      this.logOut();
    }
  }

  componentDidMount(e) {
    document.addEventListener('keydown', this.handleCtrlKey, false);
  }

  /**
   * `logIn` takes an email and password, and sets the state of the component to have a user object with
   * the email and password
   * @param email - The email address of the user.
   * @param password - The password of the user.
   */
  logIn(email, password) {
    this.setState({
      ...this.state,
      user: { email, password, isLoggedIn: true },
    });
  }

  /**
   * It sets the state of the user to the user object.
   */
  logOut() {
    this.setState({ ...this.state, user });
  }

  /**
   * It filters out the notification with the given id from the list of notifications
   * @param id - The id of the notification to be marked as read.
   */
  markNotificationAsRead(id) {
    const { listNotifications } = this.state;
    const listNotificationsFiltered = listNotifications.filter(
      (notification) => notification.id !== Number(id)
    );
    this.setState({
      ...this.state,
      listNotifications: listNotificationsFiltered,
    });
  }

  render() {
    const { isLoggedIn } = this.state.user;
    return (
      <AppContext.Provider
        value={{ user: this.state.user, logOut: this.state.logOut }}
      >
        <div className={css(styles.container)}>
          <Notifications
            displayDrawer={this.props.displayDrawer}
            handleDisplayDrawer={this.props.displayNotificationDrawer}
            handleHideDrawer={this.props.hideNotificationDrawer}
            listNotifications={this.state.listNotifications}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <div className={css(styles.app)}>
            <Header />
          </div>
          <div className={css(styles.body)}>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="BodySectionWithMarginBottom">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom>
                <Login logIn={this.logIn} title="Log in to continue" />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing Elia. Modi
                commodi optio eos totam nihil vitae ad, a inventore debitis est
                corporis iusto cumque distinctio quae delectus libero molestiae
                asperiores reprehenderit atque enim magnam? Repudiandae
                perspiciatis amet recusandae nulla ut eius? Cum deleniti
                explicabo repellat corporis. Laboriosam culpa delectus beatae
                iusto.
              </p>
            </BodySection>
          </div>
          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
};

const styles = StyleSheet.create({
  app: {
    color: vars.mainColor,
  },
  body: {
    minHeight: '100vh',
    marginTop: '10rem',
  },
  container: {
    position: 'relative',
  },
  footer: {
    fontWeight: 700,
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    bottom: 0,
    backgroundColor: 'white',
    width: '100%',
  },
});

export const mapStateToProps = (state) => {
  return {
    isUserLoggedIn: state.get('isUserLoggedIn'),
    displayDrawer: state.get('isNotificationDrawerVisible'),
  };
};
export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
