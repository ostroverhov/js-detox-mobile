import logger from '../utils/logger'
import BaseScreen from './baseScreen'
import Button from '../elements/button'
import TextBox from '../elements/textBox'
import Label from '../elements/label'

const elements = {
    signInButton: new Button('Sign in', by.text('Sign In')),
    userNameTextBox: new TextBox('User name', by.id('Your Username')),
    passwordTextBox: new TextBox('Password', by.id('Your Password')),
    alertLabel: new Label('Invalid user alert', by.text('Invalid User!')),
};

function SignInScreen() {
    BaseScreen.call(this, 'Sign in screen', by.text('Welcome!'))
}

SignInScreen.prototype = Object.create(BaseScreen.prototype);
SignInScreen.prototype.constructor = SignInScreen;

SignInScreen.prototype.typeUserName = async function(username) {
    logger.info(`Type username ${username}`)
    await elements.userNameTextBox.typeText(username);
}

SignInScreen.prototype.typePassword = async function(password) {
    logger.info(`Type password ${password}`)
    await elements.passwordTextBox.typeText(password);
}

SignInScreen.prototype.tapSignInButton = async function() {
    logger.info('Tap Sign in')
    await elements.signInButton.tapElement();
}

SignInScreen.prototype.checkAlertVisibility = async function() {
    logger.info('Is invalid user alert visible')
    await elements.alertLabel.checkElementVisiblility()
}

export default SignInScreen;
