import logger from '@/utils/logger'
import BaseScreen from '@/screens/baseScreen'
import Button from '@/elements/button'
import TextBox from '@/elements/textBox'

const elements = {
    userNameTextBox: new TextBox('User name', by.id('Your Username')),
    sideMenuButton: new Button('Sandwich menu', by.id('menu-button')),
    cardMenuItemButton: (menuItem) => new Button(`${menuItem}`, by.text(`${menuItem}`)),
};

class MainScreen extends BaseScreen {

    constructor() {
        super('Main screen', by.text('FoodFinder'))
    }

    async tapSideMenuButton() {
        logger.info('Tap side menu button')
        await elements.sideMenuButton.tapElement();
    }
    
    async tapCardMenuButton(menuItem) {
        logger.info(`Tap card menu item ${menuItem}`)
        await elements.cardMenuItemButton(menuItem).tapElement();
    }
}

export default MainScreen;
