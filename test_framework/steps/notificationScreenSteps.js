import NotificationScreen from './../screens/notificationScreen'

const notificationScreen = new NotificationScreen()

async function isNotificationScreenOpened() {
    await notificationScreen.isScreenOpened();
}

module.exports = { isNotificationScreenOpened };
