import SideMenu from './../screens/sideMenu'

const sideMenu = new SideMenu()

async function checkSideMenuVisibility() {
    await sideMenu.checkScreenVisibility();
}

async function tapSignOut() {
    await sideMenu.tapSignOutButton();
}

async function checkMenuItemVisibility(menuItem) {
    await sideMenu.checkMenuButtonVisibility(menuItem);
}

export default { checkSideMenuVisibility, tapSignOut, checkMenuItemVisibility };
