import MainScreen from '@/screens/mainScreen'

const mainScreen = new MainScreen()

async function checkMainScreenVisibility() {
    await mainScreen.checkScreenVisibility();
}

async function tapSideMenu() {
    await mainScreen.tapSideMenuButton();
}

async function tapCardMenu(menuItem) {
    await mainScreen.tapCardMenuButton(menuItem);
}

export default { checkMainScreenVisibility, tapSideMenu, tapCardMenu };
