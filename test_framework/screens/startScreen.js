import logger from '../utils/logger'
import BaseScreen from './baseScreen'
import Button from '../elements/button'

const elements = {
    getStartedButton: new Button('Get Started', by.text('Get Started'))
};

function StartScreen() {
    BaseScreen.call(this, 'Start screen', by.text('Find best food in your locality!'))
}

StartScreen.prototype = Object.create(BaseScreen.prototype);
StartScreen.prototype.constructor = StartScreen;

StartScreen.prototype.tapGetStartedButton = async function() {
    logger.info('Tap Get Started')
    await elements.getStartedButton.tapElement();
}

module.exports = StartScreen;
