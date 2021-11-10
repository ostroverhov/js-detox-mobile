import NotificationScreen from '@/screens/notificationScreen'

const notificationScreen = new NotificationScreen()

async function checkNotificationScreenVisibility() {
    await notificationScreen.checkScreenVisibility();
}

export default { checkNotificationScreenVisibility };
