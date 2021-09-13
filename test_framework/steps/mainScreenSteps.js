import MainScreen from './../screens/mainScreen'

const mainScreen = new MainScreen()

async function isMainScreenOpened() {
    await mainScreen.isScreenOpened();
}

async function TapSideMenu() {
    await mainScreen.tapSideMenuButton();
}

async function tapCardMenu(menuItem) {
    await mainScreen.tapCardMenuButton(menuItem);
}

module.exports = { isMainScreenOpened, TapSideMenu, tapCardMenu };
