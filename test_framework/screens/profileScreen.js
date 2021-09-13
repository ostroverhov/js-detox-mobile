import BaseScreen from './baseScreen'
import logger from '../utils/logger'
import Button from '../elements/button'
import Label from '../elements/label'

const elements = {
    editProfileButton: new Button('Edit profile', by.id('EditProfile')),
    editProfileLabel: new Label('Edit profile', by.text('Edit Profile')),
    profileMenuButton: (menuItem) => new Button(`${menuItem}`, by.id(`${menuItem}`)),
};

function ProfileScreen() {
    BaseScreen.call(this, 'Profile screen', by.id('Profile screen'))
}

ProfileScreen.prototype = Object.create(BaseScreen.prototype);
ProfileScreen.prototype.constructor = ProfileScreen;

ProfileScreen.prototype.isPresentProfileMenuButton = async function(menuItem) {
    logger.info(`Is present profile menu item ${menuItem}`)
    await elements.profileMenuButton(menuItem).isElementExist();
}

ProfileScreen.prototype.tapEditProfileButton = async function() {
    logger.info('Tap edit profile button')
    await elements.editProfileButton.tapElement();
}

ProfileScreen.prototype.isPresentEditProfileLabel = async function() {
    logger.info(`Is present edit profile label`)
    await elements.editProfileLabel.isElementExist();
}

module.exports = ProfileScreen;
