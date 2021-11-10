import logger from '@/utils/logger'
import BaseScreen from '@/screens/baseScreen'
import Button from '@/elements/button'

const elements = {
    menuItemButton: (menuItem) => new Button(`${menuItem}`, by.id(`${menuItem}`)),
};

class BottomMenu extends BaseScreen {

    constructor() {
        super('Start screen', by.text('Find best food in your locality!'))
    }

    async tapBottomMenuButton(menuItem) {
        logger.info(`Tap bottm menu item ${menuItem}`)
        await elements.menuItemButton(menuItem).tapElement(0);
    }
    
    async checkBottomMenuButtonVisibility(menuItem) {
        logger.info(`Is present bottom menu item ${menuItem}`)
        await elements.menuItemButton(menuItem).checkElementVisiblility(0);
    }
}

export default BottomMenu;
