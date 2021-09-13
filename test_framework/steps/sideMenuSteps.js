import SideMenu from './../screens/sideMenu'

const sideMenu = new SideMenu()

async function isSideMenuOpened() {
    await sideMenu.isScreenOpened();
}

async function TapSignOut() {
    await sideMenu.tapSignOutButton();
}

async function isPresentMenuItem(menuItem) {
    await sideMenu.isPresentMenuButton(menuItem);
}

module.exports = { isSideMenuOpened, TapSignOut, isPresentMenuItem };
