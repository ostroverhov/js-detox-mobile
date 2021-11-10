import BaseScreen from '@/screens/baseScreen'
import logger from '@/utils/logger'
import Button from '@/elements/button'
import Label from '@/elements/label'

const elements = {
    editProfileButton: new Button('Edit profile', by.id('EditProfile')),
    editProfileLabel: new Label('Edit profile', by.text('Edit Profile')),
    profileMenuButton: (menuItem) => new Button(`${menuItem}`, by.id(`${menuItem}`)),
};

class ProfileScreen extends BaseScreen {

    constructor() {
        super('Profile screen', by.id('Profile screen'))
    }

    async isPresentProfileMenuButton(menuItem) {
        logger.info(`Is present profile menu item ${menuItem}`)
        await elements.profileMenuButton(menuItem).checkElementExistence();
    }
    
    async tapEditProfileButton() {
        logger.info('Tap edit profile button')
        await elements.editProfileButton.tapElement();
    }
    
    async checkEditProfileLabel() {
        logger.info(`Is present edit profile label`)
        await elements.editProfileLabel.checkElementExistence();
    }
}

export default ProfileScreen;
