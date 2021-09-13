import logger from '../utils/logger'
import BaseScreen from './baseScreen'
import Button from '../elements/button'
import TextBox from '../elements/textBox'

const elements = {
    userNameTextBox: new TextBox('User name', by.id('Your Username')),
    sideMenuButton: new Button('Sandwich menu', by.id('menu-button')),
    cardMenuItemButton: (menuItem) => new Button(`${menuItem}`, by.text(`${menuItem}`)),
};

function MainScreen() {
    BaseScreen.call(this, 'Main screen', by.text('FoodFinder'))
}

MainScreen.prototype = Object.create(BaseScreen.prototype);
MainScreen.prototype.constructor = MainScreen;

MainScreen.prototype.tapSideMenuButton = async function() {
    logger.info('Tap side menu button')
    await elements.sideMenuButton.tapElement();
}

MainScreen.prototype.tapCardMenuButton = async function(menuItem) {
    logger.info(`Tap card menu item ${menuItem}`)
    await elements.cardMenuItemButton(menuItem).tapElement();
}

module.exports = MainScreen;
