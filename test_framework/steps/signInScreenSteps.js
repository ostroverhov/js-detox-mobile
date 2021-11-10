import SignInScreen from '@/screens/signInScreen'

const signInScreen = new SignInScreen()

async function checkSignInScreenVisibility() {
    await signInScreen.checkScreenVisibility();
}

async function typeLoginData(username, password) {
    await signInScreen.typeUserName(username);
    await signInScreen.typePassword(password);
}

async function tapSignInButton() {
    await signInScreen.tapSignInButton();
}

async function checkInvalidUserAlertVisibility() {
    await signInScreen.checkAlertVisibility();
}

export default { checkSignInScreenVisibility, typeLoginData, tapSignInButton, checkInvalidUserAlertVisibility };
