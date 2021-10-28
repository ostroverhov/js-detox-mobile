import logger from '../utils/logger'
import BaseScreen from './baseScreen'
import Button from '../elements/button'

const elements = {
    menuItemButton: (menuItem) => new Button(`${menuItem}`, by.id(`${menuItem}`)),
};

function BottomMenu() {
    BaseScreen.call(this, 'Bottom menu', by.id('Bottom tab menu'))
}

BottomMenu.prototype = Object.create(BaseScreen.prototype);
BottomMenu.prototype.constructor = BottomMenu;

BottomMenu.prototype.tapBottomMenuButton = async function(menuItem) {
    logger.info(`Tap bottm menu item ${menuItem}`)
    await elements.menuItemButton(menuItem).tapElement(0);
}

BottomMenu.prototype.checkBottomMenuButtonVisibility = async function(menuItem) {
    logger.info(`Is present bottom menu item ${menuItem}`)
    await elements.menuItemButton(menuItem).checkElementVisiblility(0);
}

export default BottomMenu;
