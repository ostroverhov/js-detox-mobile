import ProfileScreen from './../screens/profileScreen'

const profileScreen = new ProfileScreen()

async function isProfileScreenOpened() {
    await profileScreen.isScreenOpened();
}

async function isPresentProfileMenuItem(menuItem) {
    await profileScreen.isPresentProfileMenuButton(menuItem);
}

async function tapEditProfile() {
    await profileScreen.tapEditProfileButton();
}

async function isPresentEditProfileLabel() {
    await profileScreen.isPresentEditProfileLabel();
}

module.exports = { isProfileScreenOpened, isPresentProfileMenuItem, tapEditProfile, isPresentEditProfileLabel };
