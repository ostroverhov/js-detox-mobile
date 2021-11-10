import BottomMenu from '@/screens/bottomMenu'

const bottomMenu = new BottomMenu()

async function checkBottomMenuVisibility() {
    await bottomMenu.checkScreenVisibility();
}

async function tapBottomMenuItem(menuItem) {
    await bottomMenu.tapBottomMenuButton(menuItem);
}

async function checkBottomMenuItemVisibility(menuItem) {
    await bottomMenu.checkBottomMenuButtonVisibility(menuItem);
}

export default { checkBottomMenuVisibility, tapBottomMenuItem, checkBottomMenuItemVisibility };
