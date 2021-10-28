import BaseScreen from './baseScreen'

function NotificationScreen() {
    BaseScreen.call(this, 'Notification screen', by.text('Notifications'))
}

NotificationScreen.prototype = Object.create(BaseScreen.prototype);
NotificationScreen.prototype.constructor = NotificationScreen;

export default NotificationScreen;
