import logger from '../utils/logger'
import BaseScreen from './baseScreen'
import Button from '../elements/button'

const elements = {
    signOutButton: new Button('Sign out', by.text('Sign Out')),
    menuItemButton: (menuItem) => new Button(`${menuItem}`, by.id(`${menuItem}`)),
};

function SideMenu() {
    BaseScreen.call(this, 'Side menu', by.id('Avatar image'))
}

SideMenu.prototype = Object.create(BaseScreen.prototype);
SideMenu.prototype.constructor = SideMenu;

SideMenu.prototype.tapSignOutButton = async function() {
    logger.info('Tap sign out button')
    await elements.signOutButton.tapElement();
}

SideMenu.prototype.isPresentMenuButton = async function(menuItem) {
    logger.info(`Is present menu item ${menuItem}`)
    await elements.menuItemButton(menuItem).isElementVisible();
}

module.exports = SideMenu;
