import BottomMenu from './../screens/bottomMenu'

const bottomMenu = new BottomMenu()

async function isBottomMenuOpened() {
    await bottomMenu.isScreenOpened();
}

async function tapBottomMenuItem(menuItem) {
    await bottomMenu.tapBottomMenuButton(menuItem);
}

async function isPresentBottomMenuItem(menuItem) {
    await bottomMenu.isPresentBottomMenuButton(menuItem);
}

module.exports = { isBottomMenuOpened, tapBottomMenuItem, isPresentBottomMenuItem };
