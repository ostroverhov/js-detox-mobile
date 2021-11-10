import ProfileScreen from '@/screens/profileScreen'

const profileScreen = new ProfileScreen()

async function checkProfileScreenVisibility() {
    await profileScreen.checkScreenVisibility();
}

async function checkProfileMenuItemVisiility(menuItem) {
    await profileScreen.isPresentProfileMenuButton(menuItem);
}

async function tapEditProfile() {
    await profileScreen.tapEditProfileButton();
}

async function checkEditProfileLabel() {
    await profileScreen.checkEditProfileLabel();
}

export default { checkProfileScreenVisibility, checkProfileMenuItemVisiility, tapEditProfile, checkEditProfileLabel };
