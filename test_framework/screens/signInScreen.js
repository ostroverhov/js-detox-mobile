import logger from '@/utils/logger'
import BaseScreen from '@/screens/baseScreen'
import Button from '@/elements/button'
import TextBox from '@/elements/textBox'
import Label from '@/elements/label'

const elements = {
    signInButton: new Button('Sign in', by.text('Sign In')),
    userNameTextBox: new TextBox('User name', by.id('Your Username')),
    passwordTextBox: new TextBox('Password', by.id('Your Password')),
    alertLabel: new Label('Invalid user alert', by.text('Invalid User!')),
};

class SignInScreen extends BaseScreen {

    constructor() {
        super('Sign in screen', by.text('Welcome!'))
    }

    async typeUserName(username) {
        logger.info(`Type username ${username}`)
        await elements.userNameTextBox.typeText(username);
    }
    
    async typePassword(password) {
        logger.info(`Type password ${password}`)
        await elements.passwordTextBox.typeText(password);
    }
    
    async tapSignInButton() {
        logger.info('Tap Sign in')
        await elements.signInButton.tapElement();
    }
    
    async checkAlertVisibility() {
        logger.info('Is invalid user alert visible')
        await elements.alertLabel.checkElementVisiblility()
    }
}

export default SignInScreen;
