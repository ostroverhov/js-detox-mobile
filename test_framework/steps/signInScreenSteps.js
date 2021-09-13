import SignInScreen from './../screens/signInScreen'

const signInScreen = new SignInScreen()

async function isSignInScreenOpened() {
    await signInScreen.isScreenOpened();
}

async function typeLoginData(username, password) {
    await signInScreen.typeUserName(username);
    await signInScreen.typePassword(password);
}

async function tapSignInButton() {
    await signInScreen.tapSignInButton();
}

async function isInvalidUserAlertVisible() {
    await signInScreen.isAlertVisible();
}

module.exports = { isSignInScreenOpened, typeLoginData, tapSignInButton, isInvalidUserAlertVisible };
