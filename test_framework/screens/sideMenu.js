import logger from '@/utils/logger'
import BaseScreen from '@/screens/baseScreen'
import Button from '@/elements/button'

const elements = {
    signOutButton: new Button('Sign out', by.text('Sign Out')),
    menuItemButton: (menuItem) => new Button(`${menuItem}`, by.id(`${menuItem}`)),
};

class SideMenu extends BaseScreen {

    constructor() {
        super('Side menu', by.id('Avatar image'))
    }

    async tapSignOutButton() {
        logger.info('Tap sign out button')
        await elements.signOutButton.tapElement();
    }
    
    async checkMenuButtonVisibility(menuItem) {
        logger.info(`Is present menu item ${menuItem}`)
        await elements.menuItemButton(menuItem).checkElementVisiblility();
    }
}

export default SideMenu;
